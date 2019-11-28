import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { REGISTER, SEND_OTP, VERIFY_OTP } from '../../helper/constant';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  baseurl: any = "";
  constructor(private http: HttpClient) {
    this.baseurl = environment.baseUrl;
  }

  async createUser(value: any) {
    return await this.http.post(this.baseurl + REGISTER, value).toPromise();
  }

  async sendOtp(value: any) {
    return await this.http.post(this.baseurl + SEND_OTP, value).toPromise();
  }

  async verifyOtp(value: { otp_text: any; phone1: string; }) {
    return await this.http.post(this.baseurl + VERIFY_OTP, value).toPromise();
  }
}
