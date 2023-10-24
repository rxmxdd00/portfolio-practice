import { ActivatedRoute, Router } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private route : ActivatedRoute, private router: Router) {

  }

  login () {
    this.router.navigate(['/dashboard']);
  }
}
