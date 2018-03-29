import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public model: any = {};
  public errors= [];
  public enabled = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

  submit()  {
    this.enabled = true;
    this.auth.login(this.model).subscribe(
      resp => {
        this.enabled = false;
        this.router.navigateByUrl('/');
      }, err => {
        this.errors = [];
        for (let key in err['error']) {
          for (let i = 0; i < err['error'][key].length; i++) {
            this.errors.push(err['error'][key][i]);
          }
        }
        this.enabled = false;
      }
    );
  }

}
