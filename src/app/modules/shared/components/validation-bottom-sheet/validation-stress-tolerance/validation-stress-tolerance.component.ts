import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material/bottom-sheet';
import { ValidationRelationshipsComponent } from '../validation-relationships/validation-relationships.component';

@Component({
  selector: 'app-validation-stress-tolerance',
  templateUrl: './validation-stress-tolerance.component.html',
  styleUrls: ['./validation-stress-tolerance.component.scss']
})
export class ValidationStressToleranceComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<ValidationRelationshipsComponent>,
    private bottomSheet: MatBottomSheet) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit() { }

  // openStressToleranceBottomSheet() {
  // this.bottomSheet.open(ValidationStressToleranceComponent);
  // }
}
