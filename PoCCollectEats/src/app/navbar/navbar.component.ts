import {Component} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLogged: Promise<boolean> = this.keycloakService.isLoggedIn();

  constructor(private keycloakService: KeycloakService) {
    console.log(this.isLogged);
  }

  loginKeycloak() {
    this.keycloakService.login();
  }
  logoutKeycloak() {
    this.keycloakService.logout();
  }
}
