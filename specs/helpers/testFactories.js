import FavoriteRestaurantIdb from "../../src/scripts/data/favorite-restaurant-idb";
// eslint-disable-next-line import/no-unresolved
import LikeButtonPresenter from "../../src/scripts/helper/like-button-presenter";

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };
