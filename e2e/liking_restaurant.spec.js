/* eslint-disable no-undef */
Feature("Favorite Restaurant");

const assert = require("assert");

Scenario("liking one restaurant", async ({ I }) => {
  I.amOnPage("/");

  I.waitForElement(".restaurant_name");
  I.seeElement(".restaurant_name a");

  const firstRestaurant = locate(".restaurant_name a").first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".restaurant-item");
  const likedRestaurantName = await I.grabTextFrom(".restaurant_name a");

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario("unliking one favorite restaurant", async ({ I }) => {
  I.amOnPage("/");

  I.waitForElement(".restaurant_name");
  I.seeElement(".restaurant_name a");
  const firstRestaurant = locate(".restaurant_name a").first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".restaurant_name a");

  const savedRestaurant = locate(".restaurant_name a").first();
  const savedRestaurantName = await I.grabTextFrom(savedRestaurant);
  assert.strictEqual(firstRestaurantName, savedRestaurantName);

  I.click(savedRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");

  I.dontSeeElement(".restaurant-item");
  I.say("Test berhasil!");
});
