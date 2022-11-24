import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  user: any = {}

  constructor(
    private authService: AuthService,
  ) { }
  ngOnInit(): void {
    this.user = this.authService.getUserLogged();
  }


}
