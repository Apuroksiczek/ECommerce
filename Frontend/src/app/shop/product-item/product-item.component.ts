import { Component, Input, OnInit } from '@angular/core';
import { BasketServiceService as BasketService } from 'src/app/basket/basketService.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product | undefined;

  constructor(private basketService: BasketService) { }

  addItemToBasket()
  {
    this.product && this.basketService.addItemToBasket(this.product);
  }

  ngOnInit() {
  }

}
