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

  constructor() {
    this.PrepareTransactionDS();
  }

  PrepareTransactionDS() {
    this.tabsDS = [
      {
        tabName: "Items",
        columns: [
          {name: 'Product'},
          {name: 'Qty'},
          {name: 'UnitRate' },
          {name: 'Amount'},
          {name: 'comments'}
        ]
      }, {
        tabName: "Charges",
        columns: [
          {name: 'ChargeType'},
          {name: 'Charges Amount'},
          {name: 'comments'}
        ]
      }
    ]
  }


}
