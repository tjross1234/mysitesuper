import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { SiteserviceService} from './services/siteservice.service';
import { AppComponent } from './app.component';
import { SitelistComponent } from './components/sitelist/sitelist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SitelistComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    SiteserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
