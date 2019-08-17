import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { TranslateService } from '@ngx-translate/core';

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

  constructor(public dialog: MatDialog, public translate: TranslateService) { }

  ngOnInit() {
  }

}
