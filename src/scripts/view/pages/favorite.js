import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import { restaurantItemTemplate } from "../templates/template-creator";

const Favorite = {
  async render() {
    return `
        <div class="content">
            <h2 class="content_heading">Restaurant Favorit Anda</h2>
            <div id="restaurants" class="restaurants">
            </div>
        </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector("#restaurants");
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += restaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
