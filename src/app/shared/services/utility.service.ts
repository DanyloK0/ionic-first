import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {urlMapping} from "../mappings/resource-mappings";

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private router: Router,
  ) { }

  getUrl() {
    return this.router.url;
  }

  getApi() {
    return urlMapping[this.getUrl()].api
  }

  getModel() {
    return urlMapping[this.getUrl()].model;
  }

  getKeys() {
    return this.getModel().getKeys();
  }

  filterByTarget(target: string, keys: any) {
    if (!keys) {
      return
    }
    return keys.filter((key: any) => {
      return key[target] == true
    })
  }


}
