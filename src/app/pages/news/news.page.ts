import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { ToastService } from 'src/app/toast.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newsData = [];
  imageUrl = "";
  constructor(private toastService: ToastService, private newsService: NewsService) { }

  ngOnInit() {
    this.imageUrl = environment.imageUrl
    this.getHomeNews();
  }

  async getHomeNews() {
    if (this.toastService.checkNetwork()) {
      let loading = await this.toastService.presentLoading();
      this.newsService.getNews(1, 500).then((data: any) => {
        loading.dismiss();
        if (data.errorcode == 0) {
          this.newsData = data.result;
        }
      }).catch(e => {
        loading.dismiss();
        this.toastService.presentToast("Internal server error");
      });;
    }
  }

}

