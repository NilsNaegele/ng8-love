import { CoreRoutingModule } from './core-routing.module';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [ HomeComponent, WelcomeComponent, LoginComponent ],
  imports: [
    CoreRoutingModule,
    SharedModule
  ],
  entryComponents: [ LoginComponent ]
})
export class CoreModule {
  constructor() {

  }
}
