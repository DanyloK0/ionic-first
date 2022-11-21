import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent implements OnInit {
  @Input() key: any;
  @Input() form: any;
  fileName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  previewImage(event: any) {
    console.log(event.target.files[0],' event');
    this.fileName = event.target.files[0].name;
    this.form.get(this.key.key).setValue(event.target.files[0]);
  }

}
