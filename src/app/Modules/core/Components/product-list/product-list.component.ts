import { Component, OnInit } from '@angular/core';
import {ProductListService} from '../../../../Services/product-list.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public resp: any = [];
  public prevPageNum;
  public nextPageNum;
  public name;
  public searchFound = false;

  constructor(private productList: ProductListService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.resp = [];
      this.searchFound = false;
      if (params.get('search')) {
        this.getSearchResult(params.get('search'));
      }
    });
  }

  getSearchResult(name) {
    this.productList.search(name).subscribe(resp => {
      this.searchFound = true;
      this.resp = resp;
    }, err => {
      console.log(err);
    });
  }

  previousPage() {
    this.productList.searchByNameAndPage(name, this.prevPageNum).subscribe(resp => {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
        this.router.navigate(['/search']));
    }, err => {
      console.log(err);
    });
  }

  bindResults() {
    // this.prevPageNum = null;
    // this.nextPageNum = null;
    console.log(this.productList.resp);
    this.resp = this.productList.resp;
    this.name = this.resp['name'];
    // if (this.resp['current_page'] > 1) {
    //   this.prevPageNum = this.resp['current_page'] - 1;
    // }
    // if (this.resp['current_page'] < this.resp['last_page']) {
    //   this.nextPageNum = this.resp['current_page'] + 1;
    // }
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
