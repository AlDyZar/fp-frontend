import { Component, OnInit } from '@angular/core';
import {ProductListService} from '../../../../Services/product-list.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public resp: any = {};
  public prevPageNum;
  public nextPageNum;
  public name;

  constructor(private productList: ProductListService, private router: Router) { }

  previousPage() {
    this.productList.searchByNameAndPage(name, this.prevPageNum).subscribe(resp => {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
        this.router.navigate(['/search']));
    }, err => {
      console.log(err);
    });
  }

  print(){
    console.log("haha");
  }

  ngOnInit() {
    this.prevPageNum = null;
    this.nextPageNum = null;
    console.log(this.productList.resp);
    this.resp = this.productList.resp;
    this.name = this.resp['name'];
    if (this.resp['current_page'] > 1) {
      this.prevPageNum = this.resp['current_page'] - 1;
    }
    if (this.resp['current_page'] < this.resp['last_page']) {
      this.nextPageNum = this.resp['current_page'] + 1;
    }
  }

  nextPage() {
    this.productList.searchByNameAndPage(name, this.nextPageNum).subscribe(resp => {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
        this.router.navigate(['/search']));
    }, err => {
      console.log(err);
    });
  }

}
