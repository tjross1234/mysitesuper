import { Component, OnInit } from '@angular/core';
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

  constructor(private siteService: SiteserviceService) { }

  ngOnInit(): void {
    /* this.siteService.getSites().subscribe(sites => {
      // console.log(sites);
      this.sites = sites;
    }); */
    this.sites$ = this.siteService.getSites();
  }

}
