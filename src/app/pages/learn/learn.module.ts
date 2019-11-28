import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LearnPage } from './learn.page';
import { HeaderModule } from 'src/app/component/header/header.module';

const routes: Routes = [
  {
    path: '',
    component: LearnPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LearnPage]
})
export class LearnPageModule { }
