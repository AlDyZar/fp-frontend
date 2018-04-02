import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DashboardService} from '../../../../Services/dashboard.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public datas: any = [];

  constructor(private ds: DashboardService, private router: Router) { }

  ngOnInit() {
    this.ds.getHistory().subscribe(resp => {
      this.datas = resp;
    }, err => {
      console.log(err);
      localStorage.removeItem('jwt-token');
      this.router.navigateByUrl('/auth/login');
    });
  }
}
