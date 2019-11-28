import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PslPage } from './psl.page';
import { HeaderModule } from '../../component/header/header.module';

const routes: Routes = [
  {
    path: '',
    component: PslPage
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
  declarations: [PslPage]
})
export class PslPageModule { }
