import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public model: any = {};
  public enabled = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submit()  {
    this.enabled = true;
    this.auth.login(this.model).subscribe(
      resp => {
        console.log(resp);
        this.enabled = false;
        this.router.navigateByUrl('/');
      }, err => {
        console.log(err);
        this.enabled = false;
      }
    );
  }

}
