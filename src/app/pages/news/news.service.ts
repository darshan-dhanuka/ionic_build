import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { NEWS } from 'src/app/helper/constant';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseurl: string;
  constructor(public http: HttpClient) {
    this.baseurl = environment.baseUrl;
  }

  public async getNews(page: any, size: any) {
    return this.http.get(this.baseurl + NEWS + "?page=" + page + "&size=" + size).toPromise();
  }
}
