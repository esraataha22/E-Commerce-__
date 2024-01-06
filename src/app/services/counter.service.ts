import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product';
@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = new BehaviorSubject(0);
  counterVal = this.counter.asObservable();

  private total = new BehaviorSubject(0);
  totalVal = this.total.asObservable();

  items: Product[] = []
  constructor() { }

  addtoCart(product:Product){
    this.items.push(product)
  }

  getItems(){
    return this.items;
  }

  changeCounter(newCounter: number) {
    this.counter.next(newCounter);
  }

  deletefromCart(product:any){
    this.items.splice(this.items.indexOf(product), 1);    
  }

  clearCart(){
    this.items=[]
    return this.items;
  }

  totalPrice(totalPrice:number){
    this.total.next(totalPrice);
  }
  
}
