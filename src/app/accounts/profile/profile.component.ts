import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  selOptions = [
  {value: 'title', viewValue: 'Title'},
  {value: 'description', viewValue: 'Description'},
  {value: 'published', viewValue: 'Published'}];
  refresh() {}
  clear() {}
  search (keyword?: string) {}
}
