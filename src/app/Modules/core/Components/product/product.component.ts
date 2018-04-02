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
  public nItem = 1;

  constructor(private product: ProductListService, private route: ActivatedRoute, private router: Router) { }

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
    this.product.addToCart(this.resp['id'], this.nItem).subscribe(resp => {
      window.alert('Item Added');
    }, err => {
      window.alert('Please Login');
      this.router.navigateByUrl('/auth/login');
      console.log(err);
    });
  }

  buyNow() {
    this.product.buyNow(this.resp['id'], this.nItem).subscribe(resp => {
      console.log(resp);
      window.location.href = resp['url'];
    }, err => {
      window.alert('Please Login');
      this.router.navigateByUrl('/auth/login');
      console.log(err);
    });
  }

}
