import {Component, OnInit} from '@angular/core';
import {CrudService} from "../../../../shared/services/crud.service";

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {
  admins: any[] = [];

  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.getAllAdmins();
  }

  getAllAdmins() {
    this.crudService.getAll().subscribe({
      next: (data: any) => {
        this.admins = data.list;
        console.log('this.admins', this.admins);
      },
      error: (err: any) => {
        console.log('err', err);
      }
    })
  }

  updateList(list: any) {
    this.admins = list;
  }
}
