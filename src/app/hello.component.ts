import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  lookupData: Map<string, any[]> = new Map<string, any[]>();
  datasourceTabs = [];
   gridBoxValue: number[] = [1];
  ReportTabOptions = [];
  constructor() {
    this.ReportTabOptions = [
      {type: 'radio', name: 'One'},
      {type: 'radio', name: 'Multiple'},
    ]
    this.PrepareLookupData();
  }

  RadioChecked(optionName, tabName) {
    alert(tabName+"  "+optionName);
  }

  PrepareLookupData() {

    this.datasourceTabs = [
      {optionName: 'Branch',
      options: [
        {type: 'radio', name: 'One'},
        {type: 'radio', name: 'Multi'},
      ]}, {optionName: 'Division',
      options: [
        {type: 'radio', name: 'One'},
        {type: 'radio', name: 'Multi'},
      ]},
    ];

    let branches = [
      {MasterName: 'branch01', MasterCode: 'br01'},
      {MasterName: 'branch02', MasterCode: 'br02'},
      {MasterName: 'branch03', MasterCode: 'br03'},
      {MasterName: 'branch04', MasterCode: 'br04'},
      {MasterName: 'branch05', MasterCode: 'br05'}
    ]

    let divisions = [
      {MasterName: 'division1', MasterCode: 'div01'},
      {MasterName: 'division2', MasterCode: 'div02'},
      {MasterName: 'division3', MasterCode: 'div03'},
      {MasterName: 'division4', MasterCode: 'div04'},
      {MasterName: 'division5', MasterCode: 'div05'},
    ]

    this.lookupData.set('Branch', branches);
    this.lookupData.set('Division', divisions);
  }
}
