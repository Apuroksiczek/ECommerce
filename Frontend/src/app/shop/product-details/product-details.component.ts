import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;

  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() {
    const idFromParam = this.activatedRoute.snapshot.paramMap.get("id");

    if (idFromParam) {
      this.shopService.getProduct(+idFromParam)
      .subscribe({
        next: response => this.product = response,
        error: error => console.log(error)
      });
    }
  }

}
