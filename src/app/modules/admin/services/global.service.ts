import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  admin = new BehaviorSubject(null);
  user = new BehaviorSubject(null);
  searchTerm = new BehaviorSubject('');

  constructor() { }
}
