import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrls: ['./welcome-dialog.component.scss']
})
export class WelcomeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WelcomeDialogComponent>, private router: Router) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  navigateAffirmationsNewView() {
    this.router.navigate(['more-affirmations']);

  }

  ngOnInit() {
  }

}
