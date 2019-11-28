import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../../component/header/header.module';

import { IonicModule } from '@ionic/angular';
import { HowToApplyPage } from './how-to-apply.page';
import { TabsPageModule } from 'src/app/tabs/tabs.module';

const routes: Routes = [
  {
    path: '',
    component: HowToApplyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    TabsPageModule,
    HeaderModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HowToApplyPage]
})
export class HowToApplyPageModule {}
