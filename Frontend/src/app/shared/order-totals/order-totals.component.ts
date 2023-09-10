import { Component, OnInit } from '@angular/core';
import { BasketServiceService } from 'src/app/basket/basketService.service';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {

  constructor(public basketService: BasketServiceService) { }

  ngOnInit() {
  }

}
