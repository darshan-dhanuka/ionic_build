import { Injectable } from '@angular/core';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController,
    private loadingController: LoadingController,
    private network: Network,
    private storage: Storage,
    private alertController: AlertController) { }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }


  async presentAlert(header, subHeader, message, buttons) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: buttons
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    loading.present();
    return await loading;
  }

  checkNetwork() {
    if (this.network.type) {
      if (this.network.type == 'none' || this.network.type == 'Disconnect' || this.network.type == 'disconnect') {
        this.presentAlert("Error", "", "Please check your network connection and then try again.", ['OK'])
      } else {
        return true;
      }
    } else {
      return true;
      //  this.presentAlert("Error", "", "Please check your network connection and then try again.", ['OK'])
    }
  }

  async getLoginUser() {
    return this.storage.get("userDetail").then((result: any) => {
      return JSON.parse(result);
    }).catch((e) => {
      return null;
    })
  }

  async getLoginType() {
    return this.storage.get("loginType").then((result: any) => {
      return result;
    }).catch((e) => {
      return null;
    })
  }

  async checkLiveUrl(url) {
    let status = false;
    if (url) {
      if (url.indexOf("https:") != -1) {
        status = true;
      } else if (url.indexOf("http:") != -1) {
        status = true;
      } else {
        status = false;
      }
    }
    return status;
  }

}
