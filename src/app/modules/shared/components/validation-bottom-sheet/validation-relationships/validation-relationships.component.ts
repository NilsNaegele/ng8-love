import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material/bottom-sheet';

import { ValidationEmotionsComponent } from '../validation-emotions/validation-emotions.component';

@Component({
  selector: 'app-validation-relationships',
  templateUrl: './validation-relationships.component.html',
  styleUrls: ['./validation-relationships.component.scss']
})
export class ValidationRelationshipsComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<ValidationRelationshipsComponent>,
    private bottomSheet: MatBottomSheet) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit() { }

  openRelationshipsBottomSheet() {
  this.bottomSheet.open(ValidationEmotionsComponent);
  }

}
