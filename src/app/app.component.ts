import {Component, inject, OnInit} from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";
import {User} from "./models/user.model";
import {interval, map, timer} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  private authenticationService = inject(AuthenticationService);

  now = timer(0, 1).pipe(
    map(_ => new Date())
  );

  get currentUser(){
    return this.authenticationService.currentUser;
  }
  logout(){
    this.authenticationService.logout();
  }
}
