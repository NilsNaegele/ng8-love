import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {
  currentUser: any;
  constructor(public router: Router,
              public db: AngularFireDatabase,
              public globalService: GlobalService) {
                // this.currentUser = globalService.user.getValue();
               }
}
