import { DiaryEntry } from './../../models/diary-entry';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DiaryEntriesService } from '../../services/diary-entries.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-manage-diary-entries',
  templateUrl: './manage-diary-entries.component.html',
  styleUrls: ['./manage-diary-entries.component.scss']
})
export class ManageDiaryEntriesComponent implements OnInit {
diaryForm: FormGroup;
diaryEntries$: Observable<DiaryEntry[]>;


  constructor(private router: Router, private diaryService: DiaryEntriesService) { }

  ngOnInit() {
    this.diaryForm = new FormGroup({
      date: new FormControl(''),
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });
    this.diaryEntries$ = this.diaryService.getCollection$();
  }

  remove(id: string) {
    // this.diaryService.remove(id);
  }



  save() {
    const date = this.diaryForm.get('date').value;
    const title = this.diaryForm.get('title').value;
    const content = this.diaryForm.get('content').value;
    if (date && title && content) {
    // save data to firestore
    this.diaryService.add({date, title, content, likes: 0});
    this.router.navigate(['view-diary-entries']);
    }
  }

}
