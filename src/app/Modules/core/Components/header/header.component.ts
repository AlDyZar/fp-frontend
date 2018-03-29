import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../Services/auth.service';
import {ProductListService} from '../../../../Services/product-list.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAuthenticated = false;
  public username;
  public resp = false;
  public searchBody = '';

  constructor(private auth: AuthService, private searchService: ProductListService, private router: Router) { }

  ngOnInit() {
    this.isAuthenticated = false;
    this.resp = false;
    if (localStorage.getItem('jwt-token')) {
      this.auth.validateToken().subscribe(resp => {
          this.isAuthenticated = this.auth.isAuthenticated;
          console.log(resp['data']['user']['name']);
          this.username = resp['data']['user']['name'];
        },
        err => {
          this.resp = true;
          console.log(err);
        }, () => {
          this.resp = true;
        });
    } else {
      this.resp = true;
    }
  }

  logout() {
    console.log('Logged Out');
    this.auth.logout().subscribe(resp => {
      console.log(resp);
      this.isAuthenticated = this.auth.isAuthenticated;
    },
      err => {
      console.log(err);
    });
  }

  search() {
    this.searchService.search(this.searchBody).subscribe(resp => {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(['/search']));
    }, err => {
      console.log(err);
    });
  }

}
