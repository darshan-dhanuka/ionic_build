import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ToastService } from 'src/app/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private toastService: ToastService, private homeservice: HomeService) {

  }
  tabs: any = [];
  homeNews = [];
  newsFooter = '';
  ngOnInit() {
    this.getTab();
    this.getHomeNews();
  }

  async getTab() {
    if (this.toastService.checkNetwork()) {
      let loading = await this.toastService.presentLoading();
      let data: any = {};
      this.homeservice.getTab().then((data: any) => {
        loading.dismiss();
        if (data.errorcode == 0) {
          this.tabs = data.result;
          for (const item of data.result) {
            this.technologies.push(
              {
                icon: item.title.toString().toLowerCase() + ".png",
                name: item.title,
                description: item.description,
                isMenuOpen: false
              }
            )
          }
        }
      }).catch(e => {
        loading.dismiss();
        this.toastService.presentToast("Internal server error");
      });;
    }
  }

  public technologies: Array<{ name: string, description: string, icon: string, isMenuOpen: boolean }> = [];

  async getHomeNews() {
    if (this.toastService.checkNetwork()) {
      let loading = await this.toastService.presentLoading();
      let data: any = {};
      this.homeservice.getHomeNews().then((data: any) => {
        loading.dismiss();
        if (data.errorcode == 0) {
          for (const item of data.result) {
            this.homeNews.push(item.description)
          }
          this.newsFooter = this.homeNews.join(" | ");
        }
      }).catch(e => {
        loading.dismiss();
        this.toastService.presentToast("Internal server error");
      });;
    }
  }

  public captureName(event: any): void {
    for (const item of this.technologies) {
      if (event == item.name) {
        item.isMenuOpen = true;
      } else {
        item.isMenuOpen = false;
      }
    }
  }

}
