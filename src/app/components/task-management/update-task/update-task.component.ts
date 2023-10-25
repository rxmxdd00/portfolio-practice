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

    if(this.data.dialog_type == "UPDATE") {
      this.tutorialsForm = new FormGroup ({
        title : new FormControl(this.data.task.title, [Validators.required]),
        description : new FormControl(this.data.task.description, [Validators.required]),
        published : new FormControl(this.data.task.published, [Validators.required]),
      });
    }
    console.log(this.data)
  }

  confirmResult(result :any): void {
    if (result) {
     this.update();
    } else {
      this.dialogRef.close(result);
    }
  }

  update(){
    const id = this.data.task.id;
    const data = {
      title: this.tutorialsForm.value.title,
      description : this.tutorialsForm.value.description,
      published : this.tutorialsForm.value.published
    };
    console.log(data);
    this.ecommerce.update(id, data).subscribe(
      res => {
        this.dialogRef.close(res);
      }, error => {
        console.log(error);
      }
    )
  }
}
