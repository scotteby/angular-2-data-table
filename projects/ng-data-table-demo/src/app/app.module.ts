import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { DataTableModule } from 'ng-data-table';

import { DataTableDemo1 } from './demo1/data-table-demo1';
import { DataTableDemo2 } from './demo2/data-table-demo2';
import { DataTableDemo3 } from './demo3/data-table-demo3';

@NgModule({
  declarations: [AppComponent, DataTableDemo1, DataTableDemo2, DataTableDemo3],
  imports: [BrowserModule, CommonModule, FormsModule, DataTableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
