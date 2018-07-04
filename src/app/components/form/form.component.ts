import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() loggedinUser;
  @Input() user;
  @Output() create = new EventEmitter();
  @Output() update = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.loggedinUser);
    console.log(this.user);
  }

}
