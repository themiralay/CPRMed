import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  username:string=""
  constructor(public afAuth: AngularFireAuth,
    private router: Router, 
    public toastController: ToastController) { 
    }

  ngOnInit() {
  }

  async presentToast(text:string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }
  routeLogin()
  {
    this.router.navigate(['login']);
  }

  async forgotPassword(){
    const{username}=this
    try{
      const res = await this.afAuth.sendPasswordResetEmail(username)
      if(res!==null){
          this.router.navigate(['login']);
          this.presentToast("Şifreniz E-Posta Adresinize Başarıyla Gönderilmiştir");
        } else {
          this.presentToast("Böyle bir kullanıcı bulunamadı")
        }
    }catch(err){
      console.dir(err)
      if(err.code==="auth/user-not-found"){
        this.presentToast("Kullanıcı Bulunamadı");
      }
    }
  }

}
