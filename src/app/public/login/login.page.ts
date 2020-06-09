 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  username:string=""
  password:string=""

  constructor(public afAuth: AngularFireAuth,
    private router: Router,
    public toastController: ToastController) { }
    async presentToast(text:string) {
      const toast = await this.toastController.create({
        message: text,
        duration: 2000
      });
      toast.present();
    }
  ngOnInit() {
  }
  forgotPassword(){
    this.router.navigate(['forgot-password']);
  }
  register(){
    this.router.navigate(['register']);
  }
  async login(){
    const{username,password}=this
    try{
      const res = await this.afAuth.signInWithEmailAndPassword(username,password)
      if(res){
          this.router.navigate(['dashboard-tabs/dashboard-simulator-tabs']);
          this.presentToast("Kullanıcı Başarıyla Giriş Yaptı");
        } else {
          this.presentToast("Giriş yapılamadı")
        }
    }catch(err){
      console.dir(err)
      if(err.code==="auth/user-not-found"){
        this.presentToast("Kullanıcı Bulunamadı");
      }
    }
  }
}
