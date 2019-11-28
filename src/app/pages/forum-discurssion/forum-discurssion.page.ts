import { Component, OnInit, ViewChildren, ElementRef, QueryList, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ForumService } from '../forum/forum.service';
import { ToastService } from 'src/app/toast.service';
import { Observable } from 'rxjs';
import { Message, ChatService } from '../chatbot/chat.service';
import { scan } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-forum-discurssion',
  templateUrl: './forum-discurssion.page.html',
  styleUrls: ['./forum-discurssion.page.scss'],
})
export class ForumDiscurssionPage implements OnInit {
  forumTopicDetail: any;
  textValue: string;
  comments: any = [];
  loginUser: any = {
    userId: 0
  };
  imageUrl = "";
  topicId = null;
  disableScrollDown = false
  constructor(private route: ActivatedRoute,
    private toastService: ToastService,
    private forumService: ForumService,
    private router: Router,
  ) { }
  @ViewChildren('messages') messagesData: QueryList<any>;
  @ViewChild('content', null) content: ElementRef;

  async ngOnInit() {
    if (this.toastService.getLoginUser()) {
      this.loginUser = await this.toastService.getLoginUser();
      console.log(this.loginUser)
      let loginType = await this.toastService.getLoginUser();
      if (loginType == 'LOCAL') {
        this.imageUrl = environment.imageUrl
      }
    } else {
      this.router.navigate([''])
    }
    this.route.queryParams.subscribe(params => {
      this.topicId = params['topicId'];
      this.forumDiscussion(this.topicId);
    });
  }

  async sendMessage() {
    console.log(this.textValue)
    let message = {
      commentDate: new Date().toISOString(),
      commentDescription: this.textValue,
      commentId: null,
      fullName: this.loginUser.fullName,
      profile: this.loginUser.profile,
      userId: this.loginUser.userId,
      topicId: this.topicId
    }
    if (this.toastService.checkNetwork()) {
      let loading = await this.toastService.presentLoading();
      this.forumService.createDiscussion(message).then((data: any) => {
        loading.dismiss();
        this.comments.push(message);
        this.textValue = '';
      }).catch(e => {
        loading.dismiss();
        this.toastService.presentToast("Internal server error");
      });;
    }

  }

  ngAfterViewInit() {
    this.messagesData.changes.subscribe(this.scrollToBottom);
  }

  scrollToBottom = () => {
    try {
      this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
    } catch (err) { }
  }

  getImageUrl(url) {
    if (this.toastService.checkLiveUrl(url)) {
      return url;
    } else {
      return environment.imageUrl + url;
    }
  }

  async forumDiscussion(topicId) {
    console.log(topicId)
    if (this.toastService.checkNetwork()) {
      let loading = await this.toastService.presentLoading();
      this.forumService.getForumTopicDiscussion(topicId).then((data: any) => {
        loading.dismiss();
        if (data.errorcode == 0) {
          this.forumTopicDetail = data.result;
          this.comments = data.result.comments;
          console.log(this.forumTopicDetail)
        }
      }).catch(e => {
        loading.dismiss();
        this.toastService.presentToast("Internal server error");
      });;
    }
  }
}
