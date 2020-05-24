import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable, of} from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

import { Site } from '../models/site';

@Injectable({
  providedIn: 'root'
})
export class SiteserviceService {

  sitesCollection: AngularFirestoreCollection<Site>;
  sites: Observable<Site[]>;
  siteDoc: AngularFirestoreDocument;
  site: Observable<Site>;
  individualsOnSiteCollection: AngularFirestoreCollection<any>;

  constructor(public afs: AngularFirestore) {
    // this.sites = afs.collection('sites').valueChanges();
    this.sitesCollection = afs.collection<Site>('sites');
    this.sites = this.sitesCollection.snapshotChanges().pipe(
      map(changes => changes.map(c => {
        const data = c.payload.doc.data();
        const siteid = c.payload.doc.id;
        console.log({siteid, ...data});
        return {siteid, ...data};
      })),
      shareReplay(1)
    );
  }

  getSites() {
    return this.sites;
  }

  getSite(siteid: string) {
    // this.siteDoc = this.afs.doc<Site>('sites/' + siteid);
    // this.site = this.siteDoc.valueChanges();
    return this.afs.doc<Site>('sites/' + siteid).valueChanges();
  }

  getIndividualsOnSite(siteid: string) {
    return this.afs.collection<any>('sites/' + siteid + '/individualsOnSite').snapshotChanges().pipe(
      map(changes => changes.map(c => {
        const data = c.payload.doc.data();
        const id = c.payload.doc.id;
        // console.log({id, ...data});
        return {id, ...data};
      }))
    );
  }

  addIndividualToSite(siteid: string, user) {
    // console.log(siteid, user);
    const data = {
      uid: user.uid,
      email: user.email,
      name: user.displayName
    };

    this.afs.collection('sites/' + siteid + '/individualsOnSite').add(data);
  }

  removeIndividualFromSite(siteid: string, docid: string) {
    this.afs.doc<Site>('sites/' + siteid + '/individualsOnSite/' + docid).delete();
  }

  getIndividualsSiteOrientations(userid: string) {
    console.log(userid);
    return this.afs.collection<any>('users/' + userid + '/siteOrientations').snapshotChanges();
    // return ['one', 'two'];
  }
  addSiteIndocToUser(siteid: string, userid: string) {
    console.log(siteid, userid);
    const data = {
      siteid: siteid
    };

    this.afs.collection('users/' + userid + '/siteOrientations').add(data);
  }

}
