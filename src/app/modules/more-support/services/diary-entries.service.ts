import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';

import { DiaryEntry } from '../models/diary-entry';
import { Observable } from 'rxjs/internal/Observable';

import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiaryEntriesService {
  readonly path = 'diary-entries';

  constructor(private afs: AngularFirestore) {
    // afs.collection<DiaryEntry>(this.path);
    // afs.doc<DiaryEntry>(`${this.path}/${id}`);
   }

   add(data: DiaryEntry) {
     return this.afs.collection<DiaryEntry>(this.path).add(data);
   }

   update(id: string, data: Partial<DiaryEntry>): Promise<void> {
     return this.afs.doc<DiaryEntry>(`${this.path}/${id}`).update(data);
   }

   remove(id: string): Promise<void> {
     return this.afs.doc<DiaryEntry>(`${this.path}/${id}`).delete();
   }

   getCollection$(): Observable<DiaryEntry[]> {
     return this.afs.collection<DiaryEntry>(this.path)
            .snapshotChanges().pipe(
              map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data() as DiaryEntry;
                const id = a.payload.doc.id;
                return { id, ...data };
              });
            }));
   }

   // set id yourself
   set(id: string, data: DiaryEntry) {
     return this.afs.doc<DiaryEntry>(`${this.path}/${id}`).set(data);
   }





}
