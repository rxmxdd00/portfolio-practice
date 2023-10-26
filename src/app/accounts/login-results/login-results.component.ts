import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateTaskComponent } from 'src/app/components/task-management/update-task/update-task.component';

@Component({
  selector: 'app-login-results',
  templateUrl: './login-results.component.html',
  styleUrls: ['./login-results.component.css']
})
export class LoginResultsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UpdateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {}

    ngOnInit(): void {
        console.log(this.data);
    }
    confirmResult(result :any): void {
      if (result) {
        this.dialogRef.close(result);
      }
    }
  
}
