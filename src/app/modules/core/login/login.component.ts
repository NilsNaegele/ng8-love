import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SideNavService } from '../../shared/services/side-nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
  form: FormGroup = new FormGroup({
    username: new FormControl('',  [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      console.log(this.form.value);
      // auth with firebase
      this.matDialog.closeAll();
      this.sideNavService.close();
      this.router.navigate(['live-well']);
    }
  }


  constructor(private router: Router, private matDialog: MatDialog,
      private sideNavService: SideNavService) { }

  ngOnInit() {
  }

}
