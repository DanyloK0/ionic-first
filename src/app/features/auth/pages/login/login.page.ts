import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup = new FormGroup<any>({});
  forgotForm: FormGroup = new FormGroup<any>({});

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.forgotForm = this.formBuilder.group({
      email: ['', Validators.required],
    });

  }

  send(form: any) {
    
    if(form.valid) {
      this.authService.login(form).subscribe((data : any )=> {
        const token = data.headers.get('Authorization')
        localStorage.setItem('token',token);
        this.router.navigate(['/shop']);
      },
      (err: HttpErrorResponse) => {
        console.log('Username o password errati' , 'error')
        // this.utilityService.openSnackBar('Username o password errati', 'error')
      })
    }
    

  }

  reset(form:any) {
    this.authService.resetPassword(form).subscribe((data:any)=>{
      console.log('resetPsw')
    })
  }
}

