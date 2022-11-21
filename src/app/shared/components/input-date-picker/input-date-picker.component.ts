import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-date-picker',
  templateUrl: './input-date-picker.component.html',
  styleUrls: ['./input-date-picker.component.scss']
})
export class InputDatePickerComponent implements OnInit {
  @Input() key: any;
  @Input() form: any;

  constructor() { }

  ngOnInit(): void {
  }

}
