import { Router } from '@angular/router';
import { AuthService } from './../../../shared/services/auth.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit, OnChanges {
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  user: string = ''

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.getHeadClass()
  }

  ngOnInit(): void {
    this.user = this.authService.getUserLogged()
  }

  logOut(){
    this.authService.logOut().subscribe(() => {
      this.router.navigate(['/auth'])
      localStorage.removeItem('token')
    })
  }

  getHeadClass() {
    let styleClass = ''
    if (this.collapsed && this.screenWidth < 768) {
      styleClass = 'head-trimmed'
    } else {
      styleClass = 'head-md-screen'
    }    
    return styleClass;
  }

}
