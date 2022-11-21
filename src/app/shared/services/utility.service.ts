import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {urlMapping} from "../mappings/resource-mappings";
// import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private router: Router,
    // private snackBar: MatSnackBar,
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

  public openSnackBar(message: string, messageType: string) {
    // let config = new MatSnackBarConfig();
    // config.duration = 2000;
    // config.panelClass = messageType;
    // config.verticalPosition = "top";
    // config.horizontalPosition = "center";

    // this.snackBar.open(message, '', config);
  }

}
