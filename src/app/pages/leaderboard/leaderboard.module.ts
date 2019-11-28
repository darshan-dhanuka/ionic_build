import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TabsPageModule } from 'src/app/tabs/tabs.module';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../../component/header/header.module';
import { LeaderboardPage } from './leaderboard.page';

const routes: Routes = [
  {
    path: '',
    component: LeaderboardPage
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
  declarations: [LeaderboardPage]
})
export class LeaderboardPageModule {}
