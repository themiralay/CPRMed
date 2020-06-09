import { Component, OnInit } from '@angular/core';
import { NavController,NavParams } from '@ionic/angular';
import {AngularFireDatabase, AngularFireObject} from "@angular/fire/database";
import {GetWeight} from "../../models/getWeight";

@Component({
  selector: 'app-dashboard-state-tabs',
  templateUrl: './dashboard-state-tabs.page.html',
  styleUrls: ['./dashboard-state-tabs.page.scss'],
})
export class DashboardStateTabsPage implements OnInit {
  public previousValue:number=0;
  public previousSecondValue:number=0;
  public weight: number;
  public weightCounter:number=0;
  public items;
  public $subcrible;
  public highPressed:number=0;
  public lowPressed:number=0;
  public truePressed:number=0;
  public SelectedNumberValue : string ;

  constructor(public Database: AngularFireDatabase,
  ) {this.items = Database.object('gram').valueChanges()}

  ngOnInit() {
  }
  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1 === o2 : o1 === o2;
  };
  compareWith = this.compareWithFn;
  onSelectChange(selectedValue: any) {
    this.SelectedNumberValue = selectedValue.detail.value ;
  }

  simulationStart() {
    this.$subcrible = this.items.subscribe(
        value => {
          this.weight = parseInt(value);
          this.previousSecondValue = this.previousValue;
          this.previousValue = this.weight;
          this.weightCounter++;
          if (this.previousValue > this.weight && this.previousSecondValue < this.previousValue) {
            if (this.weight < 30000) {
              this.lowPressed++;
            } else if (this.weight > 50000) {
              this.highPressed++;
            } else {
              this.truePressed++;
            }
          }
        });
  }
}
