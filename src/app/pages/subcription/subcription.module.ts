import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SubcriptionPage } from './subcription.page';
import { HeaderModule } from 'src/app/component/header/header.module';

const routes: Routes = [
  {
    path: '',
    component: SubcriptionPage
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
  declarations: [SubcriptionPage]
})
export class SubcriptionPageModule { }
