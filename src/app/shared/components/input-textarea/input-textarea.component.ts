import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss']
})
export class InputTextareaComponent implements OnInit {
  @Input() key: any;
  @Input() form: any;

  constructor() { }

  ngOnInit(): void {
  }

}
