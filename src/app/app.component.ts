import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';


@Component({
  selector: 'app-root',
  // imports: [LoginComponent, SignupComponent, ProfileComponent],
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Code Step By Step';
  name:string = "sidhu";
  data:number | string = 30;
  userLogin:boolean = true;
  info:any = "this is some data";
  email="ancestest.com"

  apple(){
    this.data = "abc";
    this.info = 100;

    this.info = true
    this.info = []
  }

  sum(a:number,b:number){
    let x : number | string = 10
  console.log(a+b);
  }
}


// name = "Anil Sidhu";
  // data = 100;
  // data2 = 200;
  // user1 = "Anil";
  // user2 = "John"

  // handleClickEvent() {
  //   console.log("function called");
  //   this.handleClickEvent()
  // }

  // otherFunction(){
  //   console.log("other function")
  // }