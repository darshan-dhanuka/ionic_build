import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ForumPage } from './forum.page';
import { HeaderModule } from 'src/app/component/header/header.module';

const routes: Routes = [
  {
    path: '',
    component: ForumPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ForumPage]
})
export class ForumPageModule { }
