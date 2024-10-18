import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
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
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { RequesterInfoComponent } from './components/requester-info/requester-info.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigatorComponent,
    JobDetailsComponent,
    ReqruitmentRequestComponent,
    BackgroundVerificationComponent,
    SummaryComponent,
    RequesterInfoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDialogModule,
    CommonModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
	],

  bootstrap: [AppComponent]
})
export class AppModule { }
