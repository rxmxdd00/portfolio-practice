import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { LoginResultsComponent } from '../login-results/login-results.component';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signInForm!: FormGroup;

  constructor(private route : ActivatedRoute, private router: Router, private userService : UsersService, public dialog: MatDialog,) {
    this.signInForm = new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.email]),
      password : new FormControl(null, [Validators.required]),

    });
  }

  login () {
    if(this.signInForm.invalid) {
      return;
    }
    const data={
      email : this.signInForm.value.email,
      password:  this.signInForm.value.password,
    }
    this.userService.login(data).subscribe(
      res => {
        console.log(res);
        if(res.firstName) {
          this.userService.userInfo = res;
          this.router.navigate(['/dashboard']);  
        } else {
          console.log(res);
          this.openLoginResultDialog(res);
        }
      }
    )
  }

  openLoginResultDialog(data : any) {
    const dialogRef = this.dialog.open(LoginResultsComponent, {
      width: '450px',
      disableClose: true,
      maxWidth: '90vw',
      data: {
        dialog_type: 'RESULTS', title: 'LOGIN ERROR', data
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }
}
