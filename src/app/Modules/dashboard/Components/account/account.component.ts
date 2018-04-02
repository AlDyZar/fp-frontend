import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../Services/auth.service';
import {Router} from '@angular/router';
import {DashboardService} from '../../../../Services/dashboard.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public model: any = {};
  public valid = false;
  public errors: any = [];
  public enabled = true;

  constructor(private auth: AuthService, private router: Router, private ds: DashboardService) { }

  ngOnInit() {
    this.valid = false;
    this.auth.validateToken().subscribe(resp => {
      this.valid = true;
      this.model = resp['user'];
      console.log(this.model);
    }, err => {
      localStorage.removeItem('jwt-token');
      this.router.navigateByUrl('/auth/login');
    });
  }

  submit() {
    this.enabled = false;
    this.ds.updateProfile(this.model).subscribe(resp => {
      this.enabled = true;
      this.errors = [];
      console.log(resp);
    }, err => {
      this.errors = [];
      for (let key in err['error']) {
        for (let i = 0; i < err['error'][key].length; i++) {
          this.errors.push(err['error'][key][i]);
        }
      }
      this.enabled = true;
    });
  }

}
