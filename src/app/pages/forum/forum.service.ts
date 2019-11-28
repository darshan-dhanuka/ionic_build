import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NEWS, FORUM, FORUMDISCUSSION, FORUM_CREATE } from 'src/app/helper/constant';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  baseurl: string;
  constructor(public http: HttpClient) {
    this.baseurl = environment.baseUrl;
  }

  public async getForumTopic(page: any, size: any) {
    return this.http.get(this.baseurl + FORUM + "?page=" + page + "&size=" + size).toPromise();
  }

  public async getForumTopicDiscussion(topicId) {
    return this.http.get(this.baseurl + FORUMDISCUSSION + "?topicId=" + topicId).toPromise();
  }

  createDiscussion(message: any) {
    return this.http.post(this.baseurl + FORUM_CREATE, message).toPromise();
  }
}
