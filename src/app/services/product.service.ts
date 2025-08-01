import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http:HttpClient) { 
    
  }

  productList(){
    const url="https://dummyjson.com/products";
    return this.http.get(url)
  }











  // console.log("service called");
  // getProductData(){
  //   return[
  //     {name:'Iphone', category:'mobile',price:'120000'},
  //      {name:'Samsung', category:'mobile',price:'110000'},
  //       {name:'dell', category:'laptop',price:'20000'}
  //   ]
  // }
}
