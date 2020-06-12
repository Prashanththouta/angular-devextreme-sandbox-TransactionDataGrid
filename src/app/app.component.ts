import { Component } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
  test = ['a', 'b'];
  tabsDS = [];
  isGroupRadioButtons: boolean = false;
  dropDownOptions;
  lookupDs = [];
  employees;

  constructor() {
     this.dropDownOptions = { width: 300 };
    this.PrepareTransactionDS();
    this.PrepareDataSourceForTabs();
    this.PrepareLookupDataSource();
    this.PrepareProducts();
  }

  PrepareProducts() {
    this.employees = [
      {FullName: "Prashanth", ID: 1},
      {FullName: "Prashanth 01", ID: 2},
      {FullName: "Prashanth 02", ID: 3},
      {FullName: "Prashanth 03", ID: 4},
      {FullName: "Prashanth 04", ID: 5}
    ]
  }

  PrepareTransactionDS() {
    this.tabsDS = [
      {
        tabName: "Items",
        columns: [
          {name: 'Product', type: 'MasterId', role: 'Products'},
          {name: 'Qty', type: 'number', role: ''},
          {name: 'UnitRate', type: 'number', role: '' },
          {name: 'Amount', type: 'number', role: ''},
          {name: 'comments', type: 'string', role: ''}
        ]
      }, {
        tabName: "Charges",
        columns: [
          {name: 'ChargeType', type: 'MasterId', role: 'Charges'},
          {name: 'Charges Amount', type: 'number', role: ''},
          {name: 'comments', type: 'string', role: ''}
        ]
      }
    ]
  }

  tabDS: Map<string, []> = new Map<string, []>();
  PrepareDataSourceForTabs() {
    this.tabDS.set('Items', []);
    this.tabDS.set('Charges', []);
  }

  PrepareLookupDataSource() {
    this.lookupDs = [
      {MasterName: 'Product01', Id: 1, MasterGroup: 'Product Group'},
      {MasterName: 'Product02', Id: 2, MasterGroup: 'Product Group'},
      {MasterName: 'Product03', Id: 3, MasterGroup: 'Product Group'},
      {MasterName: 'Product04', Id: 4, MasterGroup: 'Product Group'},
      {MasterName: 'Product05', Id: 5, MasterGroup: 'Product Group'}
    ]
  }
 onSelectionChanged(selectedRowKeys, cellInfo, dropDownBoxComponent) {
        cellInfo.setValue(selectedRowKeys[0]);
        if(selectedRowKeys.length > 0) {
            dropDownBoxComponent.close();
        }
    }

}
