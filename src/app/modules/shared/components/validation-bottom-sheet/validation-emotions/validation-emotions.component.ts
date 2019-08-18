import { ValidationStressToleranceComponent } from './../validation-stress-tolerance/validation-stress-tolerance.component';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material/bottom-sheet';
import { ValidationRelationshipsComponent } from '../validation-relationships/validation-relationships.component';

@Component({
  selector: 'app-validation-emotions',
  templateUrl: './validation-emotions.component.html',
  styleUrls: ['./validation-emotions.component.scss']
})
export class ValidationEmotionsComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<ValidationRelationshipsComponent>,
    private bottomSheet: MatBottomSheet) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit() { }

  openStressToleranceBottomSheet() {
  this.bottomSheet.open(ValidationStressToleranceComponent);
  }

}
