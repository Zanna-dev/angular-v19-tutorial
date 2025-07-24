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
  count:number = 0
  handleIncrement(){
    this.count = this.count + 1
  }

   handleDecrement(){
    this.count = this.count - 1
  }

   handleReset(){
    this.count = 0
  }

  handleCounter(val:string){
    if(val=='minus'){
      this.count=this.count-1
    }else if(val=='plus'){
      this.count=this.count+1
    }else{
      this.count = 0
    }
  }
   title = 'Code Step By Step';
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

   
  // name:string = "sidhu";
  // data:number | string = 30;
  // userLogin:boolean = true;
  // info:any = "this is some data";
  // email="ancestest.com"

  // apple(){
  //   this.data = "abc";
  //   this.info = 100;

  //   this.info = true
  //   this.info = []
  // }

  // sum(a:number,b:number){
  //   let x : number | string = 10
  // console.log(a+b);
  // }