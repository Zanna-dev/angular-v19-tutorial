import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';


@Component({
  selector: 'app-root',
  // imports: [LoginComponent, SignupComponent, ProfileComponent],
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  users=['Anil', 'Sam', 'Peter', 'Bruce','Tony'];
  students=[
    {name:'Anil',age:29,email:'anil@test.com'},
    {name:'Sam',age:20,email:'sam@test.com'},
    {name:'Peter',age:26,email:'peter@test.com'},
    {name:'Bruce',age:43,email:'bruce@test.com'},
  ]
  getName(name:string){
    console.log(name)
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

   // count:number = 0
  // handleIncrement(){
  //   this.count = this.count + 1
  // }

  //  handleDecrement(){
  //   this.count = this.count - 1
  // }

  //  handleReset(){
  //   this.count = 0
  // }

  // handleCounter(val:string){
  //   if(val=='minus'){
  //     this.count=this.count-1
  //   }else if(val=='plus'){
  //     this.count=this.count+1
  //   }else{
  //     this.count = 0
  //   }
  // }
  

// setUserName(){
//   this.username="Peter"
// }

// getUserNameWithTemplate(val:string){
//   this.username=val
//   console.log(val)
// }
//  username="";

// getUserName(event: Event){
  // this.username = (event.target as HTMLInputElement).value
  // console.log(name);
  // this.username=name
// 
 // display=true
  // val=10
  // displayOneDiv=true
  // hide(){
  //   this.display=false
  // }

  // show(){
  //   this.display=true
  // }

  // toggle(){
  //   this.display=!this.display
  // }
  // toggleDivs(){
  //   this.displayOneDiv=!this.displayOneDiv
  // }

  // displayDiv=true


  //   color='red'
  //   handlColor(val:string){
  //     this.color=val;
  //   }
  //   changeColor(event:Event){
  // this.color = (event.target as HTMLInputElement).value
  //   }