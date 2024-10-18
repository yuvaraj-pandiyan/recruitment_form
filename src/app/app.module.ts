import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequesterInfoComponent } from './components/requester-info/requester-info.component';
import { HeaderComponent } from './components/header/header.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { ReqruitmentRequestComponent } from './components/reqruitment-request/reqruitment-request.component';

@NgModule({
  declarations: [
    AppComponent,
    RequesterInfoComponent,
    HeaderComponent,
    NavigatorComponent,
    JobDetailsComponent,
    ReqruitmentRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
