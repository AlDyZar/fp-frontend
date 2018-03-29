import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../Services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public model: any = {};
  public enabled = false;
  public errors = [];

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.enabled = true;
    this.auth.register(this.model).subscribe(resp => {
      console.log(resp);
      this.enabled = false;
      this.router.navigateByUrl('/auth/login');
    },
      err => {
        this.errors = [];
        for (let key in err['error']) {
          for (let i = 0; i < err['error'][key].length; i++) {
            this.errors.push(err['error'][key][i]);
          }
        }
        this.enabled = false;
      });
  }

}
