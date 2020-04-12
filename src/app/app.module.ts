import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { SiteserviceService} from './services/siteservice.service';
import { AppComponent } from './app.component';
import { SitelistComponent } from './components/sitelist/sitelist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SitedetailComponent } from './components/sitedetail/sitedetail.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SitelistComponent,
    SitedetailComponent,
    HeaderComponent,
    FooterComponent
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
