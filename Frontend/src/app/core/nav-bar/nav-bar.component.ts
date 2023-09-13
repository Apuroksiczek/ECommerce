import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account/account.service';
import { BasketServiceService } from 'src/app/basket/basketService.service';
import { BasketItem } from 'src/app/shared/models/basketItem';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public basketService: BasketServiceService, public accountService: AccountService) { }

  getCount(items: BasketItem[]) {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }

  test()
  {
    console.log("XD")
  }

  ngOnInit() {
  }

}
