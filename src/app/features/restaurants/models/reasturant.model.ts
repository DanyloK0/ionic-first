import {Validators} from "@angular/forms";

export class Restaurant {
  name: string;
  lastName: string;
  email: string;
  restaurantName: string;
  restaurantAddress: string;
  restaurantNumber: string;
  restaurantCity: string;
  restaurantZipCode: string;
  restaurantDistrict: string;
  restaurantCountry: string;
  businessName: string;
  businessAddress: string;
  businessNumber: string;
  businessCity: string;
  businessZipCode: string;
  businessDistrict: string;
  businessCountry: string;
  webSite: string;
  vatNumber: string;
  fiscalCode: string;
  sdi: string;
  pec: string;

  constructor() {
    this.name = "Name";
    this.lastName = "";
    this.email = "";
    this.restaurantName = "Name";
    this.restaurantAddress = "Address";
    this.restaurantNumber = "";
    this.restaurantCity = "City";
    this.restaurantZipCode = "";
    this.restaurantDistrict = "";
    this.restaurantCountry = "";
    this.businessName = "";
    this.businessAddress = "";
    this.businessNumber = "";
    this.businessCity = "";
    this.businessZipCode = "";
    this.businessDistrict = "";
    this.businessCountry = "";
    this.webSite = "";
    this.vatNumber = "";
    this.fiscalCode = "";
    this.sdi = "";
    this.pec = "";
  }

  static getKeys() {
    return [
      {key: 'id', label: 'Id', type: 'text', isTable: false, isForm: false, fieldConfig: {value: '', options: [], validators: []}},
      {key: 'name', label: 'Nome Referente', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'lastName', label: 'Cognome Referente', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'email', label: 'Email Referente', type: 'email', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required, Validators.email]}},
      {key: 'restaurantName', label: 'Nome Ristorante', type: 'text', isTable: true, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'restaurantAddress', label: 'Indirizzo Ristorante', type: 'text', isTable: true, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'restaurantNumber', label: ' Civico Ristorante', type: 'text', isTable: true, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'restaurantCity', label: 'Città Ristorante', type: 'text', isTable: true, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'restaurantZipCode', label: 'CAP Ristorante', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'restaurantDistrict', label: 'Provincia Ristorante', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: []}},
      {key: 'restaurantCountry', label: 'Regione Ristorante', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'businessName', label: 'Sede Legale', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'businessAddress', label: 'Indirizzo Sede Legale', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'businessNumber', label: 'Civico Sede Legale', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'businessCity', label: 'Citta Sede Legale', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'businessZipCode', label: 'Cap Sede Legale', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'businessDistrict', label: 'Provincia Sede Legale', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'businessCountry', label: 'Regione Sede Legale', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'webSite', label: 'Sito Web', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: []}},
      {key: 'vatNumber', label: 'VAT', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: []}},
      {key: 'fiscalCode', label: 'Codice Fiscale Ristorante', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.required]}},
      {key: 'sdi', label: 'SDI', type: 'text', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: []}},
      {key: 'pec', label: 'PEC', type: 'email', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: [Validators.email]}},
      {key: 'latitude', label: 'Latitudine', type: 'number', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: []}},
      {key: 'longitude', label: 'Longitudine', type: 'number', isTable: false, isForm: true, fieldConfig: {value: '', options: [], validators: []}},
    ]
  }
}

