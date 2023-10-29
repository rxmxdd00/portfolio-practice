import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() public title : any;
  @Input() public options : any;
  ngOnInit(): void {
      console.log(this.options.value);
  }
}
