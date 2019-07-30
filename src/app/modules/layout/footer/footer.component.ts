import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { WelcomeDialogComponent } from '../../shared/components/welcome-dialog/welcome-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  openDialog(): void {
    const dialogRef = this.dialog.open(WelcomeDialogComponent);
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}
