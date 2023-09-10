import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BasketServiceService } from 'src/app/basket/basketService.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;
  quantity = 1;
  quantityInBasket = 0;

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute,
    private bcService: BreadcrumbService,
    private basketService: BasketServiceService
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
            this.basketService.basketSource$.pipe(take(1)).subscribe({
              next: basket => {
                const item = basket?.items.find(x => x.id === +idFromParam)
                if (item) {
                  this.quantity = item.quantity;
                  this.quantityInBasket = item.quantity;
                }
              }
            })
          },
          error: error => console.log(error)
        });
    }
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity()
  {
    this.quantity--;
  }

  updateBasket()
  {
    if(this.product) {
      if(this.quantity > this.quantityInBasket) {
        const itemsToAdd = this.quantity - this.quantityInBasket;
        this.quantityInBasket += itemsToAdd;
        this.basketService.addItemToBasket(this.product, itemsToAdd);
      }
      else{
        const itemsToRemove = this.quantityInBasket - this.quantity;
        this.quantityInBasket -= itemsToRemove;
        this.basketService.removeItemFromBasket(this.product.id, itemsToRemove)
      }
    }
  }

  get buttonText() {
    return this.quantityInBasket === 0 ? 'Add to basket' : 'Update basket'
  }

}
