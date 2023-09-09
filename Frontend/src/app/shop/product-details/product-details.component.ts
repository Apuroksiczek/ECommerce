import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute,
    private bcService: BreadcrumbService
  ) { 
    bcService.set('@productDetails', " ");
  }

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() {
    const idFromParam = this.activatedRoute.snapshot.paramMap.get("id");

    if (idFromParam) {
      this.shopService.getProduct(+idFromParam)
        .subscribe({
          next: response => {
            this.product = response;
            this.bcService.set('@productDetails', this.product.name);
          },
          error: error => console.log(error)
        });
    }
  }

}
