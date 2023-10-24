import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  implements OnInit{
  signUpForm!: FormGroup;

  ngOnInit(): void {
      
    this.signUpForm = new FormGroup({
      firstName : new FormControl(null, [Validators.required,]),
      lastName : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required, Validators.email]),
      password : new FormControl(null, [Validators.required]),
    });
}


signUp(){
  const data={
    firstName : this.signUpForm.value.firstName,
    lastName : this.signUpForm.value.firstName,
    email : this.signUpForm.value.firstName,
    password:  this.signUpForm.value.password,
  }
  // this.auth.signUp(data)
}

}
