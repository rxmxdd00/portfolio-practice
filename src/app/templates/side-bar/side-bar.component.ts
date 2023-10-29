import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  userInfo :any;
  dashBoardSelected :any;
  constructor(private userService : UsersService) {
    
  }

  ngOnInit(): void {
    this.userInfo = this.userService.userInfo;
    console.log(this.userService.userInfo);
  }
}
