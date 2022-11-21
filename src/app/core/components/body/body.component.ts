import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

interface SidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  loading: boolean = false;
  isAuth: boolean = false
  isSideNavCollapsed: boolean = false

  constructor(
    private router: Router,
    private authService: AuthService,
    private loaderService: LoaderService,
  ) { }

  ngOnInit(): void { 
    this.isAuth = this.authService.isUserLogged
    console.log('auth', this.isAuth);
    
    this.listenToLoading()
  }

  
  onToggleSideNav(data: SidenavToggle): void {
    this.screenWidth = this.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  getBodyClass(): string {
    let styleClass = '';

    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen';
    }

    return styleClass;
  }

  listenToLoading(): void {
    this.loaderService.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
}
