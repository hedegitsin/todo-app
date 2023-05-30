import {Component, inject} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../shared/services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private authenticationService = inject(AuthenticationService);
  private fb = inject(FormBuilder);
  invalidCredentials = false;

  loginFormGroup = this.fb.group(
    {
      email: this.fb.control("", [Validators.required]),
      password: this.fb.control("", [Validators.required]),
    }
  )

  onLoginFormSubmit() {
    this.invalidCredentials = false;

    if (this.loginFormGroup.invalid) {
      return;
    }

    this.authenticationService.login(
      this.loginFormGroup.get("email")!.value!,
      this.loginFormGroup.get("password")!.value!,
    ).subscribe({
      error: () => {
        this.invalidCredentials = true;
      }
    })
  }

}
