import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';  
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import {FilePath} from '@ionic-native/file-path/ngx'
import { AngularFireDatabase,AngularFireList, AngularFireObject, } from '@angular/fire/database';
import { ToastController,Platform } from '@ionic/angular';
import { Observable ,of, ObjectUnsubscribedError} from 'rxjs';
import {Column} from '../../models/CSV';
import {InvoiceDetails} from '../../models/ICSV';
import { filter ,map} from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';

import {GetWeight} from '../../models/getWeight';
import { Papa } from 'ngx-papaparse';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { parse } from 'querystring';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
  private basePath: string = 'gram';
  headerRow: any[] = [];
  getweight: AngularFireObject<GetWeight> = null;
    public averageArray: number[];
    private promise: Promise<string>;
    public highPressed:number=0;
    public lowPressed:number=0;
    public mainListener:boolean;
    public truePressed:number=0;
    public items;
    public valueTemp;
    public tempCSV;
    public $subcrible;
    public csvData;
    public weight: number;
    public weightCounter:number;

    public SelectedYearIdValue : string ;
    public SelectedName:string;

    public previousValue:number=0;
    public previousSecondValue:number=0;

    public splitone;
    public splittwo;
    public splitthree;

    public institution;

    public testData;
    mypath:string='';

    compareWithFn = (o1, o2) => {
      return o1 && o2 ? o1 === o2 : o1 === o2;
    };
    compareWith = this.compareWithFn;
    onSelectChange(selectedValue: any) {
      this.SelectedYearIdValue = selectedValue.detail.value ;
    }

    constructor(public Database: AngularFireDatabase,
      public toastController:ToastController,
      private http: HttpClient,
      private papa: Papa,
      public alertController: AlertController,
      public fileChooser: FileChooser ,
      private platform: Platform,
      private file: File,
      public filePath:FilePath)
    {
      this.items = Database.object('gram').valueChanges()
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
  
  private loadCSV() {
    this.http
      .get(this.mypath, {
        responseType: 'text'
      })
      .subscribe(
        data => this.extractData(data),
        err => this.presentAlert(err)
        
      );
  }

  
  remapToInvoiceDetails(csvData: string[]) {
    const invoices: InvoiceDetails[] = [];
    for (const data of csvData) {
     invoices.push({
      idnumber: data[Column.idnumber],
      firstname: data[Column.firstname],
      lastname: data[Column.lastname],
      department: data[Column.department],
      });
     }
    return invoices;
    }

  async readFile() {
    this.promise = this.file.readAsText(this.mypath,'text/csv');
    await this.promise.then(value => {this.tempCSV=value,
      this.extractData(value)
    });
    }

  async presentAlert(text:string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: JSON.stringify(text),
      buttons: ['OK'],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
  private extractData(csvData) {
    this.papa.parse(csvData, {
      encoding:"UTF-8",
      complete: parsedData => {
        this.headerRow = parsedData.data.splice(0, 1)[0];
        this.csvData = parsedData.data;
        this.institution=csvData[1][9];
    }
    });
  }
  filechooser(){
    this.fileChooser.open()
   .then((uri) => {this.filePath.resolveNativePath(uri).then((resolvedpath)=>{
     let filename = resolvedpath.substring(resolvedpath.lastIndexOf('/')+1);
     let folderpath= resolvedpath.substring(0,resolvedpath.lastIndexOf('/')+1);
     this.file.readAsText(folderpath,filename).then((str)=>{
      this.extractData(str)
       this.tempCSV=str;
     })
    this.mypath=resolvedpath;
      })
    })
    .catch(e => console.log(e));
    this.readFile();
  }

  simulationStart(){
    this.$subcrible= this.items.subscribe(
      value => {
        this.weight=parseInt(value);
        this.previousSecondValue=this.previousValue;
        this.previousValue=this.weight;
        this.weightCounter++;
        if(this.previousValue>value && this.previousSecondValue<this.previousValue && this.previousValue<this.testData){
          if(this.weight<30000){
            this.lowPressed++;
          }
          else if(this.weight>50000){
            this.highPressed++;
          }
          else{
            this.truePressed++;
          }
        }
      });
    //this.$subcrible= this.items.subscribe(value => {this.averageArray=value});
    //transformAll(this.items:Observable<number>):Observable<string>);
    //this.totalWeight = this.items.pipe(filter((n:number)=>n!=0),map(n=>n*n));
  }
  simulationStop(){
      this.mainListener=false;
  }
  getItem(): AngularFireObject<GetWeight> {
    this.getweight = this.Database.object('gram')
    return this.getweight
  }
}
