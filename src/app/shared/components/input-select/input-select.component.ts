import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {
  @Input() key: any;
  @Input() form: any;

  constructor() { }

  ngOnInit(): void {
  }

}
