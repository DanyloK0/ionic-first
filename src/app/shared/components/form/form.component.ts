import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {CrudService} from "../../services/crud.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() keys: any;
  @Input() id: any;
  formGroup: any;

  constructor(
    private crudService: CrudService,
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.initForm(this.keys);
  }

  public keepOriginalOrder = (a: any, b: any) => a.key;

  initForm(keys: any) {
    let group: any = {};
    keys.forEach((key: any) => {
      group[key.key] = new FormControl(key.fieldConfig.value || '', key.fieldConfig.validators);
    });
    return new FormGroup(group);
  }

  send(form: any) {
    if (this.id) {
      this.crudService.update({...form, id: this.id}).subscribe();
    } else {
      this.crudService.create(form).subscribe();
    }
  }
}
