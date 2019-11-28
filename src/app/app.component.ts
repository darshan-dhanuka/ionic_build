import { Component } from '@angular/core';

import { Platform, MenuController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastService } from './toast.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  loginUser = {
    fullName: '',
    profile: null
  }
  constructor(
    public modalController: ModalController,
    private platform: Platform,
    private storage: Storage,
    private toastService: ToastService,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
    private router: Router
  ) {
    this.initializeApp();
  }

  menuClose() {
    this.menuCtrl.close();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.storage.get("loginStatus").then((result: any) => {
        if (result) {
          this.menuCtrl.enable(true, 'sidemenu');
        } else {
          this.menuCtrl.enable(true, 'sidemenu');
        }
      });
      if (this.toastService.getLoginUser()) {
        this.loginUser = await this.toastService.getLoginUser();
      } else {
        this.router.navigate([''])
      }
    });
  }

  doLogOut() {
    this.menuCtrl.enable(false, 'sidemenu');
    this.storage.remove('loginType');
    this.storage.remove("loginStatus");
    this.storage.remove("token");
    this.storage.remove("userDetail");
    this.router.navigate(['']);
  }


  getImageUrl(url) {
    if (this.toastService.checkLiveUrl(url)) {
      return url;
    } else {
      return environment.imageUrl + url;
    }
  }


}
