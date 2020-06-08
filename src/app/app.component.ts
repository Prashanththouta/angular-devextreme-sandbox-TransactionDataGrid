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

  constructor() {
    this.PrepareTransactionDS();
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


}
