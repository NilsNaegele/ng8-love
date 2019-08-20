import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { ValidationBottomSheetComponent } from './../validation-bottom-sheet/validation-bottom-sheet.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss'],
  animations: [
    trigger('flyIn', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-500%)' }),
        animate(500)
      ])
    ])
  ]
})
export class ValidationComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet, private router: Router) { }

  ngOnInit() {
  }

  navigate(validationType: string) {
    console.log(validationType);
    this.router.navigate([validationType]);
  }

  openSkillsBottomSheet() {
    this.bottomSheet.open(ValidationBottomSheetComponent);
  }

}
