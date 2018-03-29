import { Component, OnInit } from '@angular/core';
import {ProductListService} from '../../../../Services/product-list.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public resp: any = {};

  constructor(private product: ProductListService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.product.searchById(id).subscribe(resp => {
      console.log(resp);
      this.resp = resp;
    }, err => {
      console.log(err);
    });
    // this.product.searchById();
  }

  addToCart() {
    window.alert('added');
  }

}
