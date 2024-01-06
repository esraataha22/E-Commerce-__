import { Component, OnInit } from '@angular/core';
import { Product } from './../product';
import ProductData from '../../assets/data/products.json'
import { ApiProductService } from '../services/api-product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
products : Product[] = []; 
constructor(private ApiProductService:ApiProductService ) {}

ngOnInit(): void {
  this.ApiProductService.getProducts().subscribe((res: any) => this.products = res);
}
}
