import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.fetchProduct(params.id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      title: 'Nuevo producto',
      id: '11',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'Description'
    };

    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      this.product = product;
    });
  }

  updateProduct(){
    const changes: Partial<Product> = {
      price: 121,
      description: 'Cambio desc'
    };

    this.productsService.updateProduct('2', changes)
    .subscribe(product => {
      this.product = product;
    });
  }

  deleteProduct(){
    this.productsService.deleteProduct('2').subscribe( resp => {
      console.log('Borrado el elemento');
    });
  }
}
