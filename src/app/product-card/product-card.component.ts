import { Component, Input, Output , EventEmitter } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { Product } from '../product';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() singleProduct : any = {}
  @Output() getProductFromChild = new EventEmitter();
  counter : number = 0;
  total : number = 0;
  quantity : number = 0;

  constructor(private counterService : CounterService) { }

  ngOnInit(): void {
    this.counterService.counterVal.subscribe((count) => this.counter = count)
    this.counterService.totalVal.subscribe((count) => this.total = count)

  }

  sendToParent(){
    this.getProductFromChild.emit(this.singleProduct.id)
  }

  addtoCart(product: Product) {
    this.counterService.changeCounter(++this.counter)
    this.counterService.totalPrice(this.total+=this.singleProduct.price)
    this.quantity=1
    if(product.id==this.singleProduct.id){
      this.counterService.addtoCart(product)
      this.quantity++;
    }
  }

  // increasePrice() {
  //   this.CounterService.totalPrice(this.total+=this.singleproduct.price)
  // }
}

