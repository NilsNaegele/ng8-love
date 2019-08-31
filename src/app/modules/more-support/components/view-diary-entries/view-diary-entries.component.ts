import { DiaryEntriesService } from './../../services/diary-entries.service';
import { Component, OnInit } from '@angular/core';
import { DiaryEntry } from '../../models/diary-entry';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-view-diary-entries',
  templateUrl: './view-diary-entries.component.html',
  styleUrls: ['./view-diary-entries.component.scss']
})
export class ViewDiaryEntriesComponent implements OnInit {
  diaryEntries$: Observable<DiaryEntry[]>;


  constructor(private diaryService: DiaryEntriesService) { }

  ngOnInit() {
    this.diaryEntries$ = this.diaryService.getCollection$();
  }

  like(entry: DiaryEntry) {
    this.diaryService.update(entry.id, { likes: entry.likes + 1 });
  }

}
