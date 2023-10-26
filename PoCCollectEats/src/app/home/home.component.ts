import {Component} from '@angular/core';
import {RestaurantsService} from '../api/services';
import {Observable} from 'rxjs';
import {KeycloakService} from 'keycloak-angular';
import {Router} from '@angular/router';
import {Restaurant} from '../api/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  $listRestaurant: Observable<Restaurant[]> = new Observable<Restaurant[]>();

  constructor(
    private keycloakService: KeycloakService,
    private restaurantsService: RestaurantsService,
    private route: Router
  ) {}

  ngOnInit() {
    this.$listRestaurant = this.restaurantsService.apiRestaurantsGetAllGet$Json();
    this.keycloakService.getToken().then((result) => {
      console.log(result);
    });
  }

  ficheRestaurant(id: number) {
    this.route.navigate(['/restaurant', id]);
  }
}
