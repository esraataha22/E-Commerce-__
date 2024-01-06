import { Component, Input, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import ProductData from '../../assets/data/products.json'
import { Product } from './../product';
import { ActivatedRoute } from '@angular/router';
import { ApiProductService } from '../services/api-product.service';
import { CounterService } from '../services/counter.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  // @Input() singleProduct : any = {}
  counter : number = 0;
  total : number = 0;


        singleproduct: Product | any = {
        title:'',
        image:'',
        description:'',
        price:'',
        id:''
  };
  constructor (
    private activatedRoute: ActivatedRoute,
    private ApiProductService:ApiProductService,
    private CounterService:CounterService
    ) {}
  
  ngOnInit(): void {
    this.ApiProductService.getProductsDetails(this.activatedRoute.snapshot.params['id']).subscribe((res) => { console.log(res);
       this.singleproduct= res});
    this.CounterService.counterVal.subscribe((count) => this.counter = count)
    this.CounterService.totalVal.subscribe((count) => this.total = count)


  }

  addtoCart(product: Product) {
    this.CounterService.addtoCart(product)
    this.CounterService.changeCounter(++this.counter)
    this.CounterService.totalPrice(this.total+=this.singleproduct.price)


  }



}
