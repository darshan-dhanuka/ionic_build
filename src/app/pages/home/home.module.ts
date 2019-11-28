import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { HeaderModule } from '../../component/header/header.module';
import { MiAccordionComponent } from 'src/app/component/mi-accordion/mi-accordion.component';
import { TabsPage } from 'src/app/tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
]
@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage, MiAccordionComponent]
})
export class HomePageModule { }
