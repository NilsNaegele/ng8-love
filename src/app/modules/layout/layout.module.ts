import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { SideNavComponent } from './side-nav/side-nav.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SideNavComponent],
  imports: [ SharedModule ],
  exports: [ HeaderComponent, FooterComponent, SideNavComponent ]
})
export class LayoutModule { }
