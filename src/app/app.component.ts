import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  // imports: [LoginComponent, SignupComponent, ProfileComponent],
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  userData:any;
  addDetails(val:NgForm){
    console.log(val);
    this.userData=val;
  }































// profileForm=new FormGroup({
//   name:new FormControl('', [Validators.required]),
//    password:new FormControl('', [Validators.required,Validators.minLength(5)]),
//     email:new FormControl('', [Validators.required,Validators.maxLength(30),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),

// });

//     submitData(){
//       console.log(this.profileForm.value);
//     }

//     get name(){
//       return this.profileForm.get('name')
//     }

//     get email(){
//       return this.profileForm.get('email')
//     }

//     get password(){
//       return this.profileForm.get('password')
//     }
    // setValues(){
    //   this.profileForm.setValue({
    //     name:'peter',
    //     password:"2461",
    //     email:"peter@test.com"
    //   })
    // }













  // name=new FormControl('anil');
  // password=new FormControl('123');
  // email=new FormControl('anil@test.com');

  // getValue(){
  //   console.log(this.name.value);
  //   console.log(this.password.value);
  //   console.log(this.email.value);
  // }

  //  SetValue(){
  //    this.name.setValue("peter")
  //     this.password.setValue("1234")
  //      this.email.setValue("peter@test.com")
  // }

title = 'Code Step By Step';
}



















// RouterOutlet, RouterLink, HeaderComponent

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
  //users=['Anil', 'Sam', 'Peter', 'Bruce','Tony'];
  // students=[
  //   {name:'Anil',age:29,email:'anil@test.com'},
  //   {name:'Sam',age:20,email:'sam@test.com'},
  //   {name:'Peter',age:26,email:'peter@test.com'},
  //   {name:'Bruce',age:43,email:'bruce@test.com'},
  // ]
  // getName(name:string){
  //   console.log(name)
  // }


   // handleEvent(event:Event){
  //   console.log("function called",event.type);
  //   // console.log("function called",(event.target as HTMLInputElement).name);
  //   console.log("function called",(event.target as HTMLInputElement).value);
  // }


  //count = signal(10);

//  constructor(){
//   effect(()=>{
//     console.log(this.count());
//   }

//   )
//  }
 
//  updateValue(val:string){
//   // this.data=200
//   if(val=='dec'){
//  this.count.set(this.count()-1)
//   }else{
//      this.count.set(this.count()+1)
//   }
 
//  }




 //  data = signal<number | string>(10)
  // data:WritableSignal<number> = signal(10)
  // count : Signal<number>=computed(()=>20

  // updateValue(){
  //   // this.data.set(true)
  //   this.data.update(val=>val+10)
  //  }


  //  data = computed(()=>20)
//  count = signal(20)

//  x=signal(20);
//   y=signal(30);
//   z=computed(()=>this.x()+this.y());

//  updateValue(){
//  console.log(this.z());
//  this.x.set(100);
//  console.log(this.z);
 //}

//  updateXValue(){
//   this.x.set(1000)
//  }

// userName=signal('Anil');
// count=signal(0)
// displayHeading=false

// constructor(){
//   effect(()=>{
//   if(this.count()==2){
//     this.displayHeading=true
//     setTimeout(()=>{
//       this.displayHeading=false
//     }, 2000)
//   }else{
//     this.displayHeading=false
//   }

//     // console.log(this.userName())
//   })
// }
 //title = 'Code Step By Step';
 //users=['Anil', 'Sam','Peter','Bruce','Smith','Vinay','John','Favor'];
 

 // name="Anil"
// changeName(event:Event) {
//   const val=(event.target as HTMLInputElement).value;
//   this.name=val;
// }
// task="";
// taskList:{id:number,name:string}[]=[]
// addTask(){
//   this.taskList.push({id:this.taskList.length+1,name:this.task})
//   // console.log(this.taskList);
//   this.task="";
// }
// deleteTask(id:number){
// this.taskList= this.taskList.filter((item)=>item.id!=id)
// }
// color="green";
// fontSizeNormal="30px";
// fontSizeBig="60px";
// size=30
// zoom=true;
// zoomToggle(){
// this.zoom=!this.zoom;
// }

//  student=["Anil","Sam", "Peter", "Sumit", "bruce"];

// studentData=[{
//   name:'anil',
//   age:30,
//   email:'anil@test.com'
// },
// {
//   name:'Sam',
//   age:30,
//   email:'sam@test.com'
// },
// {
//   name:'Bruce',
//   age:30,
//   email:'bruce@test.com'
// },
// {
//   name:'Tony',
//   age:30,
//   email:'tony@test.com'
// },
// {
//   name:'Peter',
//   age:30,
//   email:'peter@test.com'
// }
// ]


 // login=true

  // loginToggle(){
  //   this.login=!this.login
  // }
// show=true
// block=1

// updateBlockVal(){
//   this.block++;
// }
// toggle(){
//   this.show=!this.show;
// }
// color="black"
 
// changeColor(color:string){
// this.color=color
// }