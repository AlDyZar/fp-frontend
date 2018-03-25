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
        this.enabled = true;
        console.log(err);
      });
  }

}
