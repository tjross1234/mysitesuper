import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

import { Site } from '../models/site';

@Injectable({
  providedIn: 'root'
})
export class SiteserviceService {

  sitesCollection: AngularFirestoreCollection<Site>;
  sites: Observable<Site[]>;

  constructor(public afs: AngularFirestore) {
    // this.sites = afs.collection('sites').valueChanges();
    this.sitesCollection = afs.collection<Site>('sites');
    this.sites = this.sitesCollection.snapshotChanges().pipe(
      map(changes => changes.map(c => {
        const data = c.payload.doc.data();
        console.log(data);
        return data;
      }))
    );
  }

  getSites() {
    return this.sites;
  }

}
