import { Component } from '@angular/core';
import { Product } from '../../product';
import { ActivatedRoute } from '@angular/router';
import { ApiProductService } from '../../services/api-product.service';
import { CounterService } from '../../services/counter.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  singleproduct: Product | any = {
    title:'',
    image:'',
    description:'',
    category:'',
    price:'',
    id:''
};
products : Product[] = []; 
items = this.CounterService.getItems();
counter : number = 0;
total : number = 0;
quantity : number = 0;



constructor (
private activatedRoute: ActivatedRoute,
private ApiProductService:ApiProductService,
private CounterService:CounterService
) {}
ngOnInit(): void {
  this.CounterService.counterVal.subscribe((count) => this.counter = count)
  this.CounterService.totalVal.subscribe((count) => this.total = count)

}

clearCart(){
  this.items=[]
  this.CounterService.changeCounter(0)
  this.CounterService.totalPrice(0)

}

deletefromCart(product:Product){
  console.log(product)
  this.CounterService.deletefromCart(product);
  this.CounterService.changeCounter(--this.counter)
  let x=this.total-product.price;
  this.CounterService.totalPrice(x)
  
}

increasePrice() {
  this.CounterService.totalPrice(this.total+=this.singleproduct.price)
}

}