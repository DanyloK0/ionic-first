import {Validators} from "@angular/forms";

export class Admin {
  name: string;
  lastName: string;
  email: string;

  constructor() {
    this.name = '';
    this.lastName = '';
    this.email = '';
  }

  static getKeys() {
    return [
      {key: 'id', label: 'Id', type: 'number', isTable: false, isForm: false, fieldConfig: {value: '', options: [], validators: []}},
      {key: 'name', label: 'Nome', type: 'text', isTable: true, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'lastName', label: 'Cognome', type: 'text', isTable: true, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'email', label: 'Email', type: 'email', isTable: true, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required, Validators.email]}},
      // {key: 'number', label: 'number', type: 'number', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      // {key: 'select', label: 'select', type: 'select', isTable: false, isForm: true, fieldConfig: {value: '', options: ['asd', 'qwe', 'lol'], validators: [Validators.required]}},
      // {key: 'textarea', label: 'textarea', type: 'textarea', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      // {key: 'password', label: 'password', type: 'password', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      // {key: 'datepicker', label: 'datepicker', type: 'datepicker', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      // {key: 'file', label: 'file', type: 'file', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      // {key: 'checkbox', label: 'checkbox', type: 'checkbox', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      // {key: 'toggle', label: 'toggle', type: 'toggle', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.requiredTrue]}},
      // {key: 'radio', label: 'radio', type: 'radio', isTable: false, isForm: true, fieldConfig: {value: '', options: ['Radio 1', 'Radio 2'], validators: [Validators.required]}},
      // {key: 'slider', label: 'slider', type: 'slider', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      // {key: 'datetime-local', label: 'datetime-local', type: 'datetime-local', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
    ];
  }
}
