import { Component, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-mindfulness-bottom-sheet',
  templateUrl: './mindfulness-bottom-sheet.component.html',
  styleUrls: ['./mindfulness-bottom-sheet.component.scss']
})
export class MindfulnessBottomSheetComponent {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
              private bottomSheetRef: MatBottomSheetRef<MindfulnessBottomSheetComponent>) {
              }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
