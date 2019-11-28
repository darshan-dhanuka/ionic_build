import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HOMETAB, HOMENEWS } from 'src/app/helper/constant';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseurl: string;
  constructor(public http: HttpClient) {
    this.baseurl = environment.baseUrl;
  }

  public async getTab() {
    return this.http.get(this.baseurl + HOMETAB).toPromise();
  }

  public async getHomeNews() {
    return this.http.get(this.baseurl + HOMENEWS).toPromise();
  }

}
