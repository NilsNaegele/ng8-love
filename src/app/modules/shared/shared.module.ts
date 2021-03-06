import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CKEditorModule } from 'ng2-ckeditor';

import { MAT_DATE_LOCALE } from '@angular/material';

import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRippleModule } from '@angular/material/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SharedRoutingModule } from './shared-routing.module';
import { TranslateModule } from '@ngx-translate/core';


import { WelcomeDialogComponent } from './components/welcome-dialog/welcome-dialog.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { GratitudeComponent } from './components/gratitude/gratitude.component';
import { ValidationComponent } from './components/validation/validation.component';
import { ValidationBottomSheetComponent } from './components/validation-bottom-sheet/validation-bottom-sheet.component';
// tslint:disable-next-line: max-line-length
import { ValidationRelationshipsComponent } from './components/validation-bottom-sheet/validation-relationships/validation-relationships.component';
import { ValidationEmotionsComponent } from './components/validation-bottom-sheet/validation-emotions/validation-emotions.component';
// tslint:disable-next-line: max-line-length
import { ValidationStressToleranceComponent } from './components/validation-bottom-sheet/validation-stress-tolerance/validation-stress-tolerance.component';
import { ValidationSelfComponent } from './components/validation/validation-self/validation-self.component';
import { ValidationOthersComponent } from './components/validation/validation-others/validation-others.component';
import { ValidationGetComponent } from './components/validation/validation-get/validation-get.component';
import { ScoreChartComponent } from '../skills/shared/components/score-chart/score-chart.component';




const SHARED_MODULES = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  RouterModule,
  HttpClientModule,
  FlexLayoutModule,
  CKEditorModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatCheckboxModule,
  MatChipsModule,
  MatOptionModule,
  MatGridListModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatSelectModule,
  MatSidenavModule,
  MatRadioModule,
  MatTabsModule,
  MatListModule,
  MatExpansionModule,
  MatRippleModule,
  MatTreeModule,
  MatBottomSheetModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatTableModule,
  MatPaginatorModule,
  MatTooltipModule
];

const SHARED_COMPONENTS = [
  WelcomeDialogComponent,
  ScoreChartComponent
];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
    PicturesComponent,
    GratitudeComponent,
    ValidationComponent,
    ValidationBottomSheetComponent,
    ValidationRelationshipsComponent,
    ValidationEmotionsComponent,
    ValidationStressToleranceComponent,
    ValidationSelfComponent,
    ValidationOthersComponent,
    ValidationGetComponent ],
  imports: [...SHARED_MODULES, SharedRoutingModule, TranslateModule ],
  exports: [...SHARED_MODULES, ...SHARED_COMPONENTS, TranslateModule],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'de' }],
  entryComponents: [
    WelcomeDialogComponent,
    ValidationBottomSheetComponent,
    ValidationRelationshipsComponent,
    ValidationEmotionsComponent,
    ValidationStressToleranceComponent
  ]
})
export class SharedModule { }
