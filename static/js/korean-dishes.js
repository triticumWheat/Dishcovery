"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const photo_gallery_js_1 = require("./photo-gallery.js");
const cuisineGalleryElement = document.getElementById("cuisine-info");
const cuisineGallery = new photo_gallery_js_1.CuisineGallery(cuisineGalleryElement);
const restaurantGalleryElement = document.getElementById("restaurant-info");
const restaurantGallery = new photo_gallery_js_1.RestaurantGallery(restaurantGalleryElement);
