import {Component, inject} from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";

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
