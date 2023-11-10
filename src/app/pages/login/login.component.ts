import {Component} from '@angular/core';
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private userNameCorrect: string = "dan111";
  private passwordCorrect: string = "0000";

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
      console.log("all correct", this.cookieService.get("access"))

      this.validateForm.reset();
    } else {
      this.cookieService.set("access", "false")
      console.log('no access', this.validateForm.value);
      this.validateForm.reset();
    }
  }

  constructor(private fb: NonNullableFormBuilder,
              private cookieService: CookieService) {
  }

}
