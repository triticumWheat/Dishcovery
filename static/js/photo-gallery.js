"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantGallery = exports.CuisineGallery = void 0;
const IMAGE_KEYWORD = "gallery";
const DESCRIPTION_KEYWORD = "intro";
class Gallery {
    constructor(place, description) {
        this.currentImage = 0;
        this.currentDescription = 0;
        const imgPlace = Array.from(place.children).filter((child) => child.classList.contains(IMAGE_KEYWORD))[0];
        this.images = Array.from(imgPlace.children).filter((child) => child.tagName === "IMG");
        this.images.forEach((img) => (img.style.display = "none"));
        if (this.images[this.currentImage] !== undefined) {
            this.images[this.currentImage].style.display = "block";
        }
        const descPlace = Array.from(place.children).filter((child) => child.classList.contains(DESCRIPTION_KEYWORD))[0];
        this.descriptions = Array.from(descPlace.children).filter((child) => child.tagName === "DIV" && child.classList.contains(description));
        this.descriptions.forEach((desc) => (desc.style.display = "none"));
        if (this.descriptions[this.currentDescription]) {
            this.descriptions[this.currentDescription].style.display = "block";
        }
    }
    nextImage() {
        this.images[this.currentImage].style.display = "none";
        this.descriptions[this.currentDescription].style.display = "none";
        this.currentImage = (this.currentImage + 1) % this.images.length;
        this.currentDescription = (this.currentDescription + 1) % this.descriptions.length;
        this.images[this.currentImage].style.display = "block";
        this.descriptions[this.currentDescription].style.display = "block";
    }
    previousImage() {
        this.images[this.currentImage].style.display = "none";
        this.descriptions[this.currentDescription].style.display = "none";
        this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
        this.currentDescription = (this.currentDescription - 1 + this.descriptions.length) % this.descriptions.length;
        this.images[this.currentImage].style.display = "block";
        this.descriptions[this.currentDescription].style.display = "block";
    }
}
class CuisineGallery extends Gallery {
    constructor(place) {
        super(place, "cuisine");
    }
}
exports.CuisineGallery = CuisineGallery;
class RestaurantGallery extends Gallery {
    constructor(place) {
        super(place, "restaurant");
    }
}
exports.RestaurantGallery = RestaurantGallery;
