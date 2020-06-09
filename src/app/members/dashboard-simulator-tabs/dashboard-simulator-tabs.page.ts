import { Component, OnInit } from '@angular/core';
import {FileChooser} from "@ionic-native/file-chooser/ngx";
import {FilePath} from "@ionic-native/file-path/ngx";
import {File} from "@ionic-native/file/ngx";
import {Papa} from "ngx-papaparse";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard-simulator-tabs',
  templateUrl: './dashboard-simulator-tabs.page.html',
  styleUrls: ['./dashboard-simulator-tabs.page.scss'],
})
export class DashboardSimulatorTabsPage implements OnInit {
  public headerRow: any[] = [];
  public csvData;
  public institution;
  public tempCSV;
  public myPath:string='';
  constructor(
      public fileChooser: FileChooser ,
      public filePath:FilePath,
      private file: File,
      private papa: Papa,
      public alertController: AlertController,
  ) { }

  ngOnInit() {
  }

    async presentAlert(header:string,message:string) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: header,
            message: message,
            buttons: ['OK']
        });

        await alert.present();
    }

  fileChoose(){
    this.fileChooser.open()
        .then((uri) => {this.filePath.resolveNativePath(uri).then((resolvedpath)=>{
          let filename = resolvedpath.substring(resolvedpath.lastIndexOf('/')+1);
          let folderpath= resolvedpath.substring(0,resolvedpath.lastIndexOf('/')+1);
          this.file.readAsText(folderpath,filename).then((str)=>{
            this.extractData(str)
            this.tempCSV=str;
          })
          this.myPath=resolvedpath;
        })
        })
        .catch(e => console.log(e));
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
    this.presentAlert("DOSYA","Seçilen dosya başarıyla yüklendi")
  }
}
