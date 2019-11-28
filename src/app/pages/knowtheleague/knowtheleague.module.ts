import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../../component/header/header.module';
import { IonicModule } from '@ionic/angular';
import { TabsPageModule } from 'src/app/tabs/tabs.module';
import { KnowtheleaguePage } from './knowtheleague.page';

const routes: Routes = [
  {
    path: '',
    component: KnowtheleaguePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabsPageModule,
    HeaderModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KnowtheleaguePage]
})
export class KnowtheleaguePageModule {}
