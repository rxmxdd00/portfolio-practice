import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EcommerceService } from 'src/app/services/ecommerce.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tutorialsForm!: FormGroup;

  constructor(private http: HttpClient, private ecommerce:EcommerceService){
    this.tutorialsForm = new FormGroup ({
      title : new FormControl(null, [Validators.required]),
      description : new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
      this.get();
      this.getOne();
  }

  add(){
    const data = {
      title: this.tutorialsForm.value.title,
      description : this.tutorialsForm.value.description
    };

    this.ecommerce.create(data).subscribe(
      res => {
        console.log(res);
      }, error => {
        console.log(error);
      }
    )
  }

  get () {
    this.ecommerce.get().subscribe(
      res => {
        console.log(res);
      }, error => {
        console.log(error);
      }
    )
  }

  getOne () {
    const id = '6534dd46f9a27343177016ca'
    this.ecommerce.getOne(id).subscribe(
      res => {
        console.log(res);
      }, error => {
        console.log(error);
      }
    )
  }
}
