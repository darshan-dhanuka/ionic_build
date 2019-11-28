import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from 'src/app/tabs/tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'psl',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../psl/psl.module').then(m => m.PslPageModule)
          }
        ]
      }, {
        path: 'learn',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../learn/learn.module').then(m => m.LearnPageModule)
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'play',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../play/play.module').then(m => m.PlayPageModule)
          }
        ]
      },
      {
        path: 'watch',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../watch/watch.module').then(m => m.WatchPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PslPageRouterModule { }
