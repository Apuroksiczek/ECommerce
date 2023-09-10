import { Component, OnInit } from '@angular/core';
import { BasketServiceService } from './basketService.service';
import { BasketItem } from '../shared/models/basketItem';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor(public basketService: BasketServiceService) { }

  incrementQuantity(item: BasketItem)
  {
    this.basketService.addItemToBasket(item);
  }

  removeItem(id: number, quantity: number)
  {
    this.basketService.removeItemFromBasket(id, quantity);
  }

  ngOnInit() {
  }

}
