import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helper/auth.guard';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule) },
  { path: 'forum', loadChildren: () => import('./pages/forum/forum.module').then(m => m.ForumPageModule) },
  { path: 'chatbot', loadChildren: () => import('./pages/chatbot/chatbot.module').then(m => m.ChatbotPageModule) },
  { path: 'news', loadChildren: () => import('./pages/news/news.module').then(m => m.NewsPageModule) },
  { path: 'subcription', loadChildren: './pages/subcription/subcription.module#SubcriptionPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'ott', loadChildren: './pages/ott/ott.module#OttPageModule' },
  { path: 'ott-single', loadChildren: './pages/ott-single/ott-single.module#OttSinglePageModule' },
  { path: 'forum-discurssion', loadChildren: './pages/forum-discurssion/forum-discurssion.module#ForumDiscurssionPageModule' },  { path: 'how-to-apply', loadChildren: './pages/how-to-apply/how-to-apply.module#HowToApplyPageModule' },
  { path: 'leaderboard', loadChildren: './pages/leaderboard/leaderboard.module#LeaderboardPageModule' },
  { path: 'teams', loadChildren: './pages/teams/teams.module#TeamsPageModule' },
  { path: 'knowtheleague', loadChildren: './pages/knowtheleague/knowtheleague.module#KnowtheleaguePageModule' },
  { path: 'partner', loadChildren: './pages/partner/partner.module#PartnerPageModule' },
  { path: 'calender', loadChildren: './pages/calender/calender.module#CalenderPageModule' },
  { path: 'calendar', loadChildren: './pages/calendar/calendar.module#CalendarPageModule' },




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  declarations: [],
  entryComponents: []
})
export class AppRoutingModule { }
