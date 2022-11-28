import {Validators} from "@angular/forms";

export class Notification {
  title: string;
  description: string;
  type: string;

  constructor() {
    this.title = "";
    this.description = "";
    this.type = "";
  }

  static getKeys() {
    return [
      {key: 'id', label: 'Id', type: 'number', isTable: false, isForm: false, fieldConfig: {value: '', options: [], validators: []}},
      {key: 'type', label: 'Tipologia', type: 'text', isTable: true, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'title', label: 'Titolo', type: 'text', isTable: true, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'description', label: 'Descrizione', type: 'text', isTable: true, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
    ]
  }
}
