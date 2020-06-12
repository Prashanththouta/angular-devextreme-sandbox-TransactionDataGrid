import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DxSelectBoxModule, DxDataGridModule,
DxDropDownBoxModule,DxLookupModule,
DxTabPanelModule } from "devextreme-angular";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DxSelectBoxModule, DxLookupModule, DxDataGridModule, DxDropDownBoxModule, DxTabPanelModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

