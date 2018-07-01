import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

export interface ITestListData {
  _id: number;
  name: string;
  value: number;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public testListData: ITestListData[] = [];
  public selectedItem: number = null;

  constructor(public navCtrl: NavController) {
    for(let i = 0; i < 1000; i++) {
      this.testListData.push({
        _id: i,
        name: 'Item #' + i,
        value: i,
      });
    }
  }

  public logClick(id) {
    console.log('Item Clicked:', id, 'Selected Item:', this.selectedItem);
  }

}
