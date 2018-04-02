import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../../../Services/dashboard.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  public datas: any = [];

  constructor(private ds: DashboardService, private router: Router) { }

  ngOnInit() {
    this.ds.getTransaction().subscribe(resp => {
      this.datas = resp;
    }, err => {
      console.log(err);
      localStorage.removeItem('jwt-token');
      this.router.navigateByUrl('/auth/login');
    });
  }

}
