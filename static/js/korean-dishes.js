// Created By: Yiyun Sun (yiyunsun@bu.edu)
// Compiled by tsc
import { CuisineGallery, RestaurantGallery } from "./photo-gallery.js";
const cuisineGalleryElement = document.getElementById("cuisine-info");
const cuisineGallery = new CuisineGallery(cuisineGalleryElement);
const restaurantGalleryElement = document.getElementById("restaurant-info");
const restaurantGallery = new RestaurantGallery(restaurantGalleryElement);
