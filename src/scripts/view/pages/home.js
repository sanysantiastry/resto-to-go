/* eslint-disable import/extensions */
import RestaurantSource from "../../data/restaurant-source";
import { restaurantItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
        <div class="content">
            <h2 class="content_heading">Rekomendasi Restaurant</h2>
            <div id="restaurants" class="restaurants">
            </div>
        </div>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurant();
    const restaurantsContainer = document.querySelector("#restaurants");
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += restaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
