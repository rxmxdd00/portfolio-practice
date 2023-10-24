import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EcommerceService } from 'src/app/services/ecommerce.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit{
  tutorialsForm!: FormGroup;
  constructor(
    private http: HttpClient, private ecommerce:EcommerceService,
    public dialogRef: MatDialogRef<UpdateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {}
  ngOnInit(): void {
    this.tutorialsForm = new FormGroup ({
      title : new FormControl(null, [Validators.required]),
      description : new FormControl(null, [Validators.required]),
    });
  }

  confirmResult(result :any): void {
    if (result) {
      console.log(result);
    } else {
      this.dialogRef.close(result);
    }
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
}
