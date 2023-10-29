import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {
  userInfo = this.userService.userInfo;
  constructor(private userService : UsersService){}

  ngOnInit(): void {
      
  }
}
