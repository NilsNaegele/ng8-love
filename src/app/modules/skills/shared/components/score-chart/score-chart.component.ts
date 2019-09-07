import { Component, OnInit, ChangeDetectionStrategy, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-score-chart',
  templateUrl: './score-chart.component.html',
  styleUrls: ['./score-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreChartComponent implements OnChanges {
  @Input() score: number;

  constructor(private elementRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
      if (changes.score) {
        this.elementRef.nativeElement.style.setProperty('--prozent', this.score);
      }
  }

}
