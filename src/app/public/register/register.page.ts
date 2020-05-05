import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username:string =""
  password:string=""
  confirmPassword:string=""
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
  async register(){
    const{username,password,confirmPassword}=this
    if(password!==confirmPassword){
      this.presentToast("Şifreler uyuşmuyor tekrar kontrol ediniz.");
    }
    try {
      const res = await this.afAuth.createUserWithEmailAndPassword(username+'@cprmed.com',password)
      this.router.navigate(['login']);
      this.presentToast("Kullanıcı Başarıyla Kayıt edildi");
    }catch(err){
      if(err.code==="auth/email-already-in-use")
      this.presentToast("Kullanıcı Zaten Kayıtlı");
    }
  }

}
