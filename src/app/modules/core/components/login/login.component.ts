import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SideNavService } from '../../../shared/services/side-nav.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  newUser = true; // toggle login or signup
  passReset = false;

  toggleForm() {
    this.newUser = !this.newUser;
  }

  signup() {
    if (this.userForm.valid) {
      console.log(this.userForm.value, this.userForm.value.email, this.userForm.value.password);
      // auth with firebase
      this.authService.emailSignUp(this.userForm.value.email, this.userForm.value.password);
    }
  }

  login() {
    if (this.userForm.valid) {
      console.log(this.userForm.value, this.userForm.value.email, this.userForm.value.password);
      // auth with firebase
      this.authService.emailLogin(this.userForm.value.email, this.userForm.value.password);
    }
  }

  private cleanUpRoutingTasks() {
    this.matDialog.closeAll();
    this.sideNavService.close();
    this.router.navigate(['live-well']);
  }


  constructor(private router: Router,
              private fb: FormBuilder,
              private matDialog: MatDialog,
              private sideNavService: SideNavService,
              private authService: AuthService) {
                this.authService.getAuth().subscribe((user) => {
                  // console.log('USER', user);
                  if (user) {
                    this.cleanUpRoutingTasks();
                  }
              });
              }

  ngOnInit() {
    this.buildForm();
  }


  buildForm(): void {
    this.userForm = this.fb.group({
      'email': ['', [ Validators.required, Validators.email]],
      'password': ['', [
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(25)
    ]
  ]
    });
    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  // updates validation state on form changes
  onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;
    for (const field in this.formErrors) {
      if (field) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          if (key) {
          this.formErrors[field] += messages[key] + ' ';
          }
        }
      }
     }
    }
  }

  // tslint:disable-next-line: member-ordering
  formErrors = {
    'email': '',
    'password': ''
  };

  // tslint:disable-next-line: member-ordering
  validationMessages = {
    'email': {
      'required': 'Email ist erfordert.',
      'email': 'Email muss gültig sein.'
    },
    'password': {
      'required': 'Passwort ist erfordert.',
      'pattern': 'Passwort muss einen Buchstaben und Zahl enthalten.',
      'minlength': 'Passwort muss wenigstens 4 Buchstaben lang sein.',
      'maxlength': 'Passwort darf nicht länger als 40 Buchstaben sein.'
    }
  };

}
