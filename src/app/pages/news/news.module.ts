import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TimeAgoPipe } from 'time-ago-pipe';
import { IonicModule } from '@ionic/angular';

import { NewsPage } from './news.page';
import { HeaderModule } from '../../component/header/header.module';

const routes: Routes = [
  {
    path: '',
    component: NewsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, HeaderModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewsPage]
})
export class NewsPageModule { }
