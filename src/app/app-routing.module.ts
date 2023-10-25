import { RouterModule, Routes } from '@angular/router';

import { DashboardsComponent } from './components/dashboards/dashboards.component';
import { DeleteTaskComponent } from './components/task-management/delete-task/delete-task.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './accounts/login/login.component';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './accounts/sign-up/sign-up.component';
import { TaskListComponent } from './components/task-management/task-list/task-list.component';
import { UpdateTaskComponent } from './components/task-management/update-task/update-task.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'sign-in',
    data: {
      title: 'sign-in',
    },
    // canActivate: [AuthGuard],
    component: LoginComponent
  },
  {
    path: 'sign-up',
    data: {
      title: 'sign-up',
    },
    // canActivate: [AuthGuard],
    component: SignUpComponent
  },
  { path : 'home', component : HomeComponent},
  {
    path: 'task-list',
    data: {
      title: 'task-list',
    },
    // canActivate: [AuthGuard],
    component: TaskListComponent
  },
  
  {
    path: 'dashboard',
    data: {
      title: 'dashboard',
    },  
    component: DashboardsComponent,
    children : [
      { path:'', redirectTo : '/dashboard', pathMatch: 'full'},
      {
        path: 'task-update/:id',
        data: {
          title: 'task-update',
        },
        // canActivate: [AuthGuard],
        component: UpdateTaskComponent
      },
      {
        path: 'task-delete/:id',
        data: {
          title: 'task-delete',
        },
        // canActivate: [AuthGuard],
        component: DeleteTaskComponent
      },
    ],
    // canActivate: [AuthGuard],
  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
