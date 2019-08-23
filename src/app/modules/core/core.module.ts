import { CoreRoutingModule } from './core-routing.module';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [ HomeComponent, WelcomeComponent ],
  imports: [
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule {
  constructor() {

  }
}
