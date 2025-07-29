import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  // styleUrl: './user.component.css'
  styleUrls: ['./button.style.css','./user.component.css']

})
export class UserComponent {
  name:string|null="";
  id:string|null="";
constructor(private route:ActivatedRoute){

}

ngOnInit(){
  this.route.params.subscribe((params)=>{
    this.name=params['name']
    this.id=params['id']
   
  })
}
}
