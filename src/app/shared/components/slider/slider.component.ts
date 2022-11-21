import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() key: any;
  @Input() form: any;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.form.get(this.key.key).setValue(20)
      console.log('key', this.key);
    });

  }

  setValue(key: string, value: any){
    debugger
    key = value
  }

}
