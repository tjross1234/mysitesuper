import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiteserviceService } from '../../services/siteservice.service';

import { Observable } from 'rxjs';

import { Site } from '../../models/site';


@Component({
  selector: 'app-sitelist',
  templateUrl: './sitelist.component.html',
  styleUrls: ['./sitelist.component.scss']
})
export class SitelistComponent implements OnInit {

  sites$: Observable<Site[]>;

  constructor(
    private siteService: SiteserviceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    /* this.siteService.getSites().subscribe(sites => {
      // console.log(sites);
      this.sites = sites;
    }); */
    this.sites$ = this.siteService.getSites();
  }

  onCardClick(siteid: string) {
    // console.log('Card clicked: ' + siteid);
    this.router.navigate(['/site/', siteid]);
  }

}
