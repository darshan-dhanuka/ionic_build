import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../../component/header/header.module';



import { TabsPageModule } from 'src/app/tabs/tabs.module';
import { IonicModule } from '@ionic/angular';

import { TeamsPage } from './teams.page';

const routes: Routes = [
  {
    path: '',
    component: TeamsPage
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
  declarations: [TeamsPage]
})
export class TeamsPageModule {}
