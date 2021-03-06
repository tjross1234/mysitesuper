import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LobbyComponent } from './components/lobby/lobby.component';
import { SitelistComponent } from './components/sitelist/sitelist.component';
import { SitedetailComponent } from './components/sitedetail/sitedetail.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/sites', pathMatch: 'full' },
  { path: 'sites', component: SitelistComponent, canActivate: [AuthGuard] },
  { path: 'lobby', component: LobbyComponent },
  { path: 'site/:siteid', component: SitedetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
