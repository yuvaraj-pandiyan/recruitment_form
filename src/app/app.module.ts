import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { ReqruitmentRequestComponent } from './components/reqruitment-request/reqruitment-request.component';
import { BackgroundVerificationComponent } from './components/background-verification/background-verification.component';
import { SummaryComponent } from './components/summary/summary.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { RequesterInfoComponent } from './components/requester-info/requester-info.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { InputCardComponent } from './components/input-card/input-card.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigatorComponent,
    JobDetailsComponent,
    ReqruitmentRequestComponent,
    BackgroundVerificationComponent,
    SummaryComponent,
    RequesterInfoComponent,
    InputCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatChipsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDialogModule,
    CommonModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    { provide: MAT_DIALOG_DATA, useValue: {} }
	],

  bootstrap: [AppComponent]
})
export class AppModule { }
