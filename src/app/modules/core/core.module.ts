import { CoreRoutingModule } from './core-routing.module';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule {
  constructor() {

  }
}
