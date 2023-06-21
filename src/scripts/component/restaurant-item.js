import { restaurantItemTemplate } from "../view/templates/template-creator";
import "lazysizes";

class Restaurant extends HTMLElement {
  // eslint-disable-next-line accessor-pairs
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = restaurantItemTemplate(this._restaurant);
  }
}
customElements.define("restaurant-item", Restaurant);
