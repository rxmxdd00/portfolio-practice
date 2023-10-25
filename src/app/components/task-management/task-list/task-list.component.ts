import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { AddTaskComponent } from '../add-task/add-task.component';
import { DeleteTaskComponent } from '../delete-task/delete-task.component';
import { EcommerceService } from 'src/app/services/ecommerce.service';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from "@angular/material/table";
import { Task } from 'src/app/interface/task-interface';
import { UpdateTaskComponent } from '../update-task/update-task.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  @ViewChild('searchInput') elementRef: ElementRef | undefined;
  task : Task []= [];
  activePanelIndex: number = -1; // Initialize to -1 to start with no highlighted panel
  isTiles = false; // for switch view
  public displayedColumns = ['id', 'title', 'description', 'published', 'action'];

  public dataSource = new MatTableDataSource<any>();

  constructor(private ecommerceService : EcommerceService, public dialog: MatDialog,) {}

  ngOnInit(): void {
      this.getTaskList ();
  }

  isTilesView () {
    this.isTiles ? this.isTiles = false : this.isTiles = true;
  }
  getTaskList () {
    this.ecommerceService.get().subscribe(
      res => {
       this.task = res;
       console.log(this.task);
       this.dataSource.data = this.task;
      }, error => {
        console.log(error);
      }
    )
  }


  openUpdateDialog(task: any) {
    const dialogRef = this.dialog.open(UpdateTaskComponent, {
      width: '450px',
      disableClose: true,
      maxWidth: '90vw',
      data: {
        dialog_type: 'UPDATE', title: 'UPDATE TASK', task
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        // refresh list
        this.getTaskList();
        console.log(res);
      } else if (res) {
        console.log(res)
      }
    });
  }

  openDeleteDialog(id : string) {
    const dialogRef = this.dialog.open(DeleteTaskComponent, {
      width: '450px',
      disableClose: true,
      maxWidth: '90vw',
      data: {
        dialog_type: 'DELETE', title: 'DELETE TASK', id
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        // refresh list
        console.log(res);
        this.getTaskList ();
      } else if (res) {
        console.log(res)
      }
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '450px',
      disableClose: true,
      maxWidth: '90vw',
      data: {
        dialog_type: 'ADD', title: 'ADD NEW TASK',
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if (res) {
        // refresh list
        this.getTaskList ();
        console.log(res);
      } else {
        console.log(res)
      }
    });
  }

  searchDatas(stringSearch : any) {
    if(stringSearch) {
      let datas = this.dataSource.data;
      const data = datas.filter(
        res => res.title.toLowerCase().includes(stringSearch.toLowerCase())
      );
      if(data) {
        this.dataSource.data = data;
        this.task = data;
      }
    } else {
      this.getTaskList();
    }
  }

  refresh() {
    this.getTaskList();
    if (this.elementRef) {
      this.elementRef.nativeElement.value = '';
    }
  }
}
