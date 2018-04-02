import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../../../Services/dashboard.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public datas: any = [];
  public total: number;

  constructor(private dashService: DashboardService) { }

  ngOnInit() {
    this.total = 0;
    this.dashService.getCart().subscribe(resp => {
      this.datas = resp;
      for (const data of this.datas) {
        this.total += parseFloat(data['price']) * data['qty'];
      }
    }, err => {
      console.log(err);
    });
  }

  checkout() {
    this.dashService.checkout().subscribe(resp => {
      console.log(resp);
      window.location.href = resp['url'];
    }, err => {
      console.log(err);
    });
  }

}
