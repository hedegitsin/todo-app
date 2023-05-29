import {Component, inject, OnInit} from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";
import {User} from "./models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  private authenticationService = inject(AuthenticationService);

  get currentUser(){
    return this.authenticationService.currentUser;
  }

  logout(){
    this.authenticationService.logout();
  }
}
