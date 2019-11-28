import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-how-to-apply',
  templateUrl: './how-to-apply.page.html',
  styleUrls: ['./how-to-apply.page.scss'],
})
export class HowToApplyPage implements OnInit {

  constructor(private iab : InAppBrowser) { }
  OpenUrl()
  {
  const browser = this.iab.create('https://www.pokersportsleague.com/qualifier?email=rajat.namdev@pokersportsleague.com&app_flag=1');
  browser.show()
  }
  ngOnInit() {
  }

}