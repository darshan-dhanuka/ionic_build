import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

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
              import('../pages/psl/psl.module').then(m => m.PslPageModule)
          }
        ]
      }, {
        path: 'learn',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/learn/learn.module').then(m => m.LearnPageModule)
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'play',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/play/play.module').then(m => m.PlayPageModule)
          }
        ]
      },
      {
        path: 'watch',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/watch/watch.module').then(m => m.WatchPageModule)
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
export class TabsPageRoutingModule { }
