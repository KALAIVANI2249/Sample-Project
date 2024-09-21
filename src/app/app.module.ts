import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { LinechartComponent } from './linechart/linechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ChartModule } from 'angular-highcharts';
@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    LinechartComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,HttpClientModule,ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
