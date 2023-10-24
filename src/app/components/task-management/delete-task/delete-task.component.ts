import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EcommerceService } from 'src/app/services/ecommerce.service';
import { UpdateTaskComponent } from '../update-task/update-task.component';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {


  constructor( private http: HttpClient, private taskService:EcommerceService,
    public dialogRef: MatDialogRef<UpdateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {}
  
  ngOnInit(): void {
      console.log(this.data);
  }

  confirmResult(result :any): void {
    if (result) {
      this.deleteData ();
    } else {
      this.dialogRef.close(result);
    }
  }

  deleteData () {
    var tid = this.data.id;
    this.taskService.delete(tid).subscribe(
      data => {
        console.log(data);
        this.dialogRef.close(data);
      }
    )
  }

}
