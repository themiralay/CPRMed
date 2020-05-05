import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username:string =""
  password:string=""
  confirmPassword:string=""
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  async register(){
    const{username,password,confirmPassword}=this
    if(password!==confirmPassword){
      return console.error("Şifreler uyuşmuyor")
    }
    try {
      const res = await this.afAuth.createUserWithEmailAndPassword(username+'@cprmed.com',password)
      console.log(res)
    }catch(err){
      if(err.code==="auth/email-already-in-use")
        console.log("kullanıcı zaten kayıtlı")
    }
  }

}
