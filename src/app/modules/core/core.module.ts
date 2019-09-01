import { CoreRoutingModule } from './core-routing.module';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';


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
