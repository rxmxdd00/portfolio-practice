import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() public title :any;
  @Input() public placeholder :any;
  @Input() public hasRefreshBtn :any;
  @Input() public hasSearchBar :any;
  @Input() public isSubOf :any;
  @Output() refresh = new EventEmitter();
  @Output() search = new EventEmitter();
  @Output() clear = new EventEmitter();
  
}
