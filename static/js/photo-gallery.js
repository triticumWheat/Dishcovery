// Created By: Yiyun Sun (yiyunsun@bu.edu)
// Compiled by tsc

const IMAGE_KEYWORD = "gallery";
const DESCRIPTION_KEYWORD = "intro";
class Gallery {
    constructor(place, description) {
        var _a, _b;
        this.currentImage = 0;
        this.currentDescription = 0;
        const imgPlace = place.querySelector(`#${description}-gallery`);
        const descPlace = place.querySelector(`#${description}-intro`);
        this.images = Array.from(imgPlace.querySelectorAll("img"));
        this.images.forEach((img) => (img.style.display = "none"));
        if (this.images[this.currentImage] !== undefined) {
            this.images[this.currentImage].style.display = "inline";
        }
        (_a = imgPlace.querySelector("#restaurant-left")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => this.previousImage());
        (_b = imgPlace.querySelector("#restaurant-right")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => this.nextImage());
        this.descriptions = Array.from(descPlace.querySelectorAll("div." + description));
        this.descriptions.forEach((desc) => (desc.style.display = "none"));
        if (this.descriptions[this.currentDescription]) {
            this.descriptions[this.currentDescription].style.display = "inline";
        }
    }
    nextImage() {
        this.images[this.currentImage].style.display = "none";
        this.descriptions[this.currentDescription].style.display = "none";
        this.currentImage = (this.currentImage + 1) % this.images.length;
        this.currentDescription = (this.currentDescription + 1) % this.descriptions.length;
        this.images[this.currentImage].style.display = "inline";
        this.descriptions[this.currentDescription].style.display = "inline";
    }
    previousImage() {
        this.images[this.currentImage].style.display = "none";
        this.descriptions[this.currentDescription].style.display = "none";
        this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
        this.currentDescription = (this.currentDescription - 1 + this.descriptions.length) % this.descriptions.length;
        this.images[this.currentImage].style.display = "inline";
        this.descriptions[this.currentDescription].style.display = "inline";
    }
}
export class CuisineGallery extends Gallery {
    constructor(place) {
        super(place, "cuisine");
    }
}
export class RestaurantGallery extends Gallery {
    constructor(place) {
        super(place, "restaurant");
    }
}
