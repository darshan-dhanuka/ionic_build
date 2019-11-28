import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LOGIN, SOCIAL_APP } from '../../helper/constant';


export class Social {
  constructor(public email: string,
    public token: string,
    public first_name: string,
    public userId: string,
    public last_name: string,
    public name: string,
    public picture: string,
    public provider: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl: any = "";
  constructor(private http: HttpClient) {
    this.baseurl = environment.baseUrl;
  }

  async createLogin(value: any) {
    return await this.http.post(this.baseurl + LOGIN, value).toPromise();
  }

  async createSocial(value: any) {
    return await this.http.post(this.baseurl + SOCIAL_APP, value).toPromise();
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("userDetail"));
  }

  getToken() {
    return localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetail");
  }
}
