import { Component} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-profile',
    // template:"<h1>Profile Component</h1>",
    // styleUrl:'./profile.component.css',
    templateUrl:'./profile.component.html',
    styles:["h1{background-color:green} button{font-size:50px}"]
})
export class ProfileComponent{

//     userName:string|null='';
// constructor(private route:ActivatedRoute){}
// ngOnInit(){
//         // this.userName=this.route.snapshot.paramMap.get('name')
//         // console.log(user);
//         // this.route.queryParams.subscribe(params=>{
//         //     console.log(params['name']);
//         //     this.userName=params['name']
//         // })

//         this.route.data.subscribe(params=>{
//             this.userName=params['name']
//             console.log(params)
//         })
//     }
}