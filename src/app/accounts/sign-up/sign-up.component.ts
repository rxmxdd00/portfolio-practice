import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  implements OnInit{
  signUpForm!: FormGroup;

  constructor(private usersService: UsersService) {
    this.signUpForm = new FormGroup({
      firstName : new FormControl(null, [Validators.required,]),
      lastName : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required, Validators.email]),
      password : new FormControl(null, [Validators.required]),
      confirmPassword : new FormControl(null, [Validators.required])
    });
  }
  ngOnInit(): void {
}


signUp(){
  const data={
    firstName : this.signUpForm.value.firstName,
    lastName : this.signUpForm.value.lastName,
    email : this.signUpForm.value.email,
    password:  this.signUpForm.value.password,
  }
  // this.auth.signUp(data)
  this.usersService.create(data).subscribe(
    res => {
      console.log(res);
      this.signUpForm.reset();
    }
  )
}

}
