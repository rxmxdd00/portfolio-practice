import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EcommerceService } from 'src/app/services/ecommerce.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  tutorialsForm!: FormGroup;
  constructor(private http: HttpClient, private ecommerce:EcommerceService,
    public dialogRef: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,){
    this.tutorialsForm = new FormGroup ({
      title : new FormControl(null, [Validators.required]),
      description : new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
}

confirmResult(result :any): void {
  if (result) {
    this.add();
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
      this.dialogRef.close(res);
    }
  )
}
}
