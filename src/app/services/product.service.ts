import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { 
    console.log("service called");
    
  }
  getProductData(){
    return[
      {name:'Iphone', category:'mobile',price:'120000'},
       {name:'Samsung', category:'mobile',price:'110000'},
        {name:'dell', category:'laptop',price:'20000'}
    ]
  }
}
