import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }

  user_name: any;
  password: any

  ngOnInit() {
  }

  openHomePage() {
    this.router.navigate(['/home/all_post']);
    // this.router.navigate(['/']);

  }

}
