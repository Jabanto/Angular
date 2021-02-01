import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from "@angular/forms";

import { AppComponent } from './app.component';
import { ADNcontentChartComponent } from './Components/adncontent-chart/adncontent-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ADNcontentChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
