// Created By: Yiyun Sun (yiyunsun@bu.edu)
import { CuisineGallery, RestaurantGallery } from "./photo-gallery.js";

const cuisineGalleryElement = document.getElementById("cuisine-info") as HTMLDivElement;
const cuisineGallery = new CuisineGallery(cuisineGalleryElement);

const restaurantGalleryElement = document.getElementById("restaurant-info") as HTMLDivElement;
const restaurantGallery = new RestaurantGallery(restaurantGalleryElement);