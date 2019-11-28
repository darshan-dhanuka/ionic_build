import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LoginService, Social } from './login.service';
import { ToastService } from '../../toast.service';
import { Storage } from '@ionic/storage';
import { MenuController, Platform } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { __await } from 'tslib';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validationMessages: any;
  loadingController: boolean;
  submitted = false;

  constructor(
    private loginService: LoginService,
    private storage: Storage,
    private platform: Platform,
    private menuCtrl: MenuController,
    private fb: Facebook,
    private google: GooglePlus,
    private fireAuth: AngularFireAuth,
    private toastService: ToastService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
    this.validationMessages = {
      'email': [
        { type: 'required', message: 'Email is required.' },
        { type: 'email', message: 'Please enter valid email.' }
      ],
      'password': [
        { type: 'required', message: 'Password is required.' }
      ]
    }
  }

  get f() { return this.loginForm.controls; }

  async submitLogin(loginForm) {
    this.submitted = true;
    if (loginForm.invalid) {
      return;
    }
    if (this.toastService.checkNetwork()) {
      let loading = await this.toastService.presentLoading();
      this.loginService.createLogin(loginForm.value).then((result: any) => {
        loading.dismiss();
        if (result.errorcode == 0) {
          this.menuCtrl.enable(true, 'sidemenu');
          this.storage.set('loginType', "LOCAL");
          this.storage.set('loginStatus', 1);
          this.storage.set('token', result.token);
          this.storage.set("userDetail", JSON.stringify(result));
          this.router.navigate(['/home/tabs/home'])
        } else {
          this.toastService.presentToast(result.msg);
        }
      }).catch(e => {
        loading.dismiss();
        if (e.status == 400) {
          if (e.error.error == "invalid_credentials") {
            this.toastService.presentToast("Please enter valid credentials");
          }
        }
      });
    }
  }

  loginWithFacebook() {
    if (this.toastService.checkNetwork()) {
      const permissions = ["public_profile", "email"];
      this.fb.login(permissions)
        .then((response: FacebookLoginResponse) => {
          this.onLoginSuccess(response);
        }).catch((error) => {
          console.log(error)
          alert('error:' + error)
        });
    }
  }

  onLoginSuccess(res: FacebookLoginResponse) {
    const credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
    this.fireAuth.auth.signInWithCredential(credential).then((response: any) => {
      console.log(response);
      let userInfo = response.additionalUserInfo;
      let social = new Social(userInfo.profile.email,
        response.credential.accessToken,
        userInfo.profile.first_name,
        userInfo.profile.id,
        userInfo.profile.last_name,
        userInfo.profile.name,
        userInfo.profile.picture.data.url,
        "FACEBOOK");
      console.log(social);
      this.generateSocialLogin(social);
    })
  }

  async generateSocialLogin(request: any) {
    let loading = await this.toastService.presentLoading();
    this.loginService.createSocial(request).then((result: any) => {
      loading.dismiss();
      if (result.errorcode == 0) {
        this.menuCtrl.enable(true, 'sidemenu');
        this.storage.set('loginType', "SOCIAL");
        this.storage.set('loginStatus', 1);
        this.storage.set('token', result.token);
        this.storage.set("userDetail", JSON.stringify(result));
        this.router.navigate(['/home/tabs/home'])
      } else {
        this.toastService.presentToast(result.msg);
      }
    }).catch(e => {
      loading.dismiss();
      this.toastService.presentToast("Please enter valid credentials");
    });
  }

  async doGoogleLogin() {
    if (this.toastService.checkNetwork()) {
      if (this.platform.is('cordova')) {
        let params = {
          'webClientId': '230833787106-qe5bv5e2lobafhim0bhpqh1925ve5s97.apps.googleusercontent.com',
          'offline': true
        }
        let googleUser: any = await this.google.login(params);
        const credential = firebase.auth.GoogleAuthProvider.credential(googleUser.idToken);
        this.fireAuth.auth.signInWithCredential(credential).then((responseGoogle: any) => {
          let userInfo = responseGoogle.additionalUserInfo;
          let social = new Social(userInfo.profile.email,
            responseGoogle.credential.idToken,
            userInfo.profile.given_name,
            userInfo.profile.sub,
            userInfo.profile.family_name,
            userInfo.profile.name,
            userInfo.profile.picture,
            "GOOGLE");
          console.log(social);
          this.generateSocialLogin(social);
        })
      } else {
        const provider = new firebase.auth.GoogleAuthProvider();
        const responseGoogle: any = await this.fireAuth.auth.signInWithPopup(provider);
        console.log(responseGoogle);
        let userInfo = responseGoogle.additionalUserInfo;
        let social = new Social(userInfo.profile.email,
          responseGoogle.credential.idToken,
          userInfo.profile.given_name,
          userInfo.profile.sub,
          userInfo.profile.family_name,
          userInfo.profile.name,
          userInfo.profile.picture,
          "GOOGLE");
        this.generateSocialLogin(social);
      }
    }
  }

  navigate() {

  }
}