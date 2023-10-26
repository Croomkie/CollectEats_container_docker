import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlatsService, RestaurantsService} from '../api/services';
import {Plat, Restaurant} from '../api/models';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
})
export class RestaurantComponent {
  restaurant: Restaurant = {};
  listePlat: Plat[] = new Array<Plat>();

  constructor(
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService,
    private platsService: PlatsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let idRestaurant = +params['id'];
      this.restaurantsService
        .apiRestaurantsGetByIdGet$Json({id: idRestaurant})
        .subscribe((result) => (this.restaurant = result));
      this.platsService
        .apiPlatsGetAllOfRestaurantGet$Json({id: idRestaurant})
        .subscribe((result) => (this.listePlat = result));
    });
  }
}
