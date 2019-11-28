import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OttPage } from './ott.page';
import { HeaderModule } from 'src/app/component/header/header.module';

const routes: Routes = [
  {
    path: '',
    component: OttPage
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
  declarations: [OttPage]
})
export class OttPageModule { }
