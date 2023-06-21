// eslint-disable-next-line import/no-unresolved, import/extensions
import { itActsAsFavoriteRestaurantModel } from "./contract/favorite-restaurant-contract";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";

describe("Favorite Restaurant Idb Contract Test Implementation", () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(
      async (restaurant) => {
        await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
      }
    );
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
