import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastService } from 'src/app/toast.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { ForumService } from './forum.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {

  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;

  constructor(private router: Router, private toastService: ToastService, private forumService: ForumService) { }

  forumData = [];
  forumTopicDetail = [];
  ngOnInit() {
    this.getForumTopics();
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.forumData.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  async getForumTopics() {
    if (this.toastService.checkNetwork()) {
      let loading = await this.toastService.presentLoading();
      this.forumService.getForumTopic(1, 10).then((data: any) => {
        loading.dismiss();
        if (data.errorcode == 0) {
          this.forumData = data.result;
        }
      }).catch(e => {
        loading.dismiss();
        this.toastService.presentToast("Internal server error");
      });;
    }
  }
  async forumDiscussion(topicId) {
    this.router.navigate(['/forum-discurssion'], { queryParams: { topicId: topicId } })
  }
}
