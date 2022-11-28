import {Component, OnInit} from '@angular/core';
import {CrudService} from "../../../../shared/services/crud.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss']
})
export class UsersPage implements OnInit {

  users: any[] = []

  constructor(
    private crudService: CrudService
  ) {
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.crudService.getAll().subscribe({
      next: (data: any) => {
        this.users = data.list;
        console.log('this.users', this.users);
      },
      error: (err: any) => {
        console.log('err', err);
      }
    })
  }

  updateList(list: any) {
    this.users = list;
  }
}
