import { ValidationRelationshipsComponent } from './validation-relationships/validation-relationships.component';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-validation-bottom-sheet',
  templateUrl: './validation-bottom-sheet.component.html',
  styleUrls: ['./validation-bottom-sheet.component.scss']
})
export class ValidationBottomSheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<ValidationBottomSheetComponent>,
              private bottomSheet: MatBottomSheet) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit() {
  }

  openRelationshipsBottomSheet() {
    this.bottomSheet.open(ValidationRelationshipsComponent);
  }

}
