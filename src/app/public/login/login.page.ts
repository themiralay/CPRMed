import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  username:string=""
  password:string=""

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  async login(){
    const{username,password}=this
    try{
      const res = await this.afAuth.signInWithEmailAndPassword(username+'@cprmed.com',password)
    }catch(err){
      console.dir(err)
      if(err.code==="auth/user-not-found"){
        console.log("Kullanıcı Bulunamadı")
      }
    }
  }

}
