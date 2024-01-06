import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`https://fakestoreapi.com/products`);
  }

  getProductsDetails(id : number){
   return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
}
