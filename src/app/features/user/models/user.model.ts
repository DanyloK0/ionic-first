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
      {key: 'id', label: 'Id', type: 'text', isTable: false, isForm: false, fieldConfig: {value: '', options: [], validators: []}},
      {key: 'name', label: 'Nome', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'lastName', label: 'Cognome', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'email', label: 'Email', type: 'email', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'username', label: 'UserName', type: 'text', isTable: true, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'phoneNumber', label: 'Cellulare', type: 'tel', isTable: true, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      // {key: 'profileImage', label: 'Immagine di profilo', type: 'file', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'birthday', label: 'Data di nascita', type: 'datepicker', isTable: true, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'sex', label: 'Sesso', type: 'select', isTable: false, isForm: true, fieldConfig: {value: '', options: [{id: 1, name: 'Male'}, {id: 2, name: 'Female'}, {id: 3, name: 'Other'},], validators: [Validators.required]}},
      {key: 'fiscalCode', label: 'codice fiscale', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'address', label: 'Indirizzo', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'number', label: 'Telefono', type: 'tel', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'city', label: 'Città', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'zipCode', label: 'CAP', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'district', label: 'Comune', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'country', label: 'Regione', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'sdi', label: 'Sdi', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
    ]
  }
}
