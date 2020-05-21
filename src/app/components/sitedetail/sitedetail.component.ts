import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import { Site } from '../../models/site';

import { SiteserviceService } from '../../services/siteservice.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sitedetail',
  templateUrl: './sitedetail.component.html',
  styleUrls: ['./sitedetail.component.scss']
})
export class SitedetailComponent implements OnInit, OnDestroy {

  siteid: string;
  sitedata: Observable<Site>;
  individualsOnSite: Observable<any>;
  loggedInUserOnSite = false;
  loggedInUser: Subscription;
  loggedInUserEmail: string;
  loggedInUserDocId: string;
  isOnSite = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private siteservice: SiteserviceService,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.siteid = this.route.snapshot.paramMap.get('siteid');
    this.loggedInUser = this.auth.user$.subscribe(user => this.loggedInUserEmail = user.email);
    this.sitedata = this.siteservice.getSite(this.siteid);
    this.individualsOnSite = this.siteservice.getIndividualsOnSite(this.siteid).pipe(
      tap(iosList => {
        const filtered = iosList.filter(individual => individual.email === this.loggedInUserEmail);
        const numOnSite = Object.keys(filtered).length;
        if (numOnSite > 0) {
          this.loggedInUserOnSite = true;
          this.loggedInUserDocId = filtered[0].id;
        } else {
          this.loggedInUserOnSite = false;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.loggedInUser.unsubscribe();
  }

  addIndividualToSite(user) {
    this.siteservice.addIndividualToSite(this.siteid, user);
  }

  removeIndividualFromSite(docid: string) {
    this.siteservice.removeIndividualFromSite(this.siteid, docid);
  }

  testMe(stuff) {
    console.log(stuff);
  }

}
