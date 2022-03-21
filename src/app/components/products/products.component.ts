import { Component, OnInit } from '@angular/core';
import {ProductsService} from "./products.service";
import {Observable} from "rxjs";
import {Product} from "../../models/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products$ = this.productsService.get();
  }
}
