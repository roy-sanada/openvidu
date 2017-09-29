import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './app.material.module';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { OpenviduRestService } from './services/openvidu-rest.service';
import { OpenviduInstanceComponent } from './components/openvidu-instance/openvidu-instance.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OpenviduInstanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexLayoutModule,
    routing
  ],
  providers: [
    OpenviduRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }