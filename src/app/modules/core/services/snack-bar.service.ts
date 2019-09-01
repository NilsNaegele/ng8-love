import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CompilerConfig } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  open(message: string, action = 'success') {
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    this.snackBar.open(message, action, config);

  }


}
