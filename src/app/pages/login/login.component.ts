import {Component} from '@angular/core';
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {environment} from "../../../environments/environment.development";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private userNameCorrect: string = environment.AdminLogin;
  private passwordCorrect: string = environment.AdminPassword;

  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });

  submitForm(): void {
    if ((this.validateForm.value.userName == this.userNameCorrect)
      && (this.validateForm.value.password == this.passwordCorrect)) {
      this.cookieService.set("access", "true")
      this.router.navigate(['/types']);
      this.validateForm.reset();
    } else {
      this.createBasicNotification()
      this.cookieService.set("access", "false")
      this.validateForm.reset();
    }
  }

  createBasicNotification(): void {
    this.notification
      .blank(
        'Wrong login or password',
        'Authorization error. Please enter correct information.'
      )
      .onClick.subscribe(() => {
      console.log('notification clicked!');
    });
  }

  constructor(private fb: NonNullableFormBuilder,
              private cookieService: CookieService,
              private router: Router,
              private notification: NzNotificationService) {
  }

}
