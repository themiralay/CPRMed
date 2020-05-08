import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';  
import { AngularFireDatabase,AngularFireList, AngularFireObject, } from '@angular/fire/database';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import {GetWeight} from '../../models/getWeight';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
  private basePath: string = 'gram';
  getweight: AngularFireObject<GetWeight> = null;
    items: Observable<any>;
    constructor(public Database: AngularFireDatabase,public toastController:ToastController ) {
      this.items = Database.object('gram').valueChanges()
      const data =this.items.subscribe(val=>console.log(val+" Gram Bastınız."));
    }
    async presentToast(text:string) {
      const toast = await this.toastController.create({
        message: text,
        duration: 2000
      });
      toast.present();
    }
  ngOnInit() {
    
  }
  getItem(): AngularFireObject<GetWeight> {
    this.getweight = this.Database.object('gram')
    return this.getweight
  }
}
