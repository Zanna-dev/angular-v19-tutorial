import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
users=[{
  id:'1',
  name:'Anil',
  age:28,
},
{
  id:'2',
  name:'sam',
  age:29,
},
{
  id:'3',
  name:'bruce',
  age:26,
},
{
  id:'4',
  name:'peter',
  age:22,
},
{
  id:'5',
  name:'tony',
  age:25,
}]
}
