import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() key: any;
  @Input() form: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
