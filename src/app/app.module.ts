import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'

import { AppRoutingModule } from './app-routing.module';

import { SiteserviceService} from './services/siteservice.service';
import { AppComponent } from './app.component';
import { SitelistComponent } from './components/sitelist/sitelist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SitedetailComponent } from './components/sitedetail/sitedetail.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SitelistComponent,
    SitedetailComponent,
    HeaderComponent,
    FooterComponent,
    LobbyComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    SiteserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
