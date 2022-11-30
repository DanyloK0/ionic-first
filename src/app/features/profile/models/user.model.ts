import {Validators} from "@angular/forms";

export class User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  username: string;
  phoneNumber: string;
  profileImage: string;
  birthday: string;
  sex: number;
  fiscalCode: string;
  address: string;
  number: string;
  city: string;
  zipCode: string;
  district: string;
  country: string;
  sdi: string;

  constructor() {
    this.id = "";
    this.name = "";
    this.lastName = "";
    this.email = "";
    this.username = "";
    this.phoneNumber = "";
    this.profileImage = "";
    this.birthday = "";
    this.sex = 0;
    this.fiscalCode = "";
    this.address = "";
    this.number = "";
    this.city = "";
    this.zipCode = "";
    this.district = "";
    this.country = "";
    this.sdi = "";
  }

  static getKeys() {
    return [
      {key: 'id', label: 'Id', type: 'number', isTable: false, isForm: false, fieldConfig: {value: '', options: [], validators: []}},
      {key: 'name', label: 'Nome', type: 'text', isTable: true, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'lastName', label: 'Cognome', type: 'text', isTable: true, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'username', label: 'UserName', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'email', label: 'Email', type: 'email', isTable: true, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required, Validators.email]}},
      {key: 'birthday', label: 'Data di nascita', type: 'datepicker', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'sex', label: 'Sesso', type: 'select', isTable: false, isForm: true, fieldConfig: {value: '', options: [{id: 1, name: 'M'}, {id: 2, name: 'F'}, {id: 3, name: 'X'}], validators: [Validators.required]}},
      {key: 'fiscalCode', label: 'Codice Fiscale', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'phoneNumber', label: 'Cellulare', type: 'tel', isTable: true, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'address', label: 'Indirizzo', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'number', label: 'Civico', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'zipCode', label: 'CAP', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'country', label: 'Regione', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'district', label: 'Comune', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'city', label: 'Città', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'sdi', label: 'Sdi', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
    ]
  }
}
