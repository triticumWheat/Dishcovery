// Created By: Yiyun Sun (yiyunsun@bu.edu)
const IMAGE_KEYWORD = "gallery";
const DESCRIPTION_KEYWORD = "intro";

class Gallery {
    private images: HTMLImageElement[];
    private currentImage: number = 0;
    private currentDescription: number = 0;
    private descriptions: HTMLDivElement[];

    constructor(place: HTMLDivElement, description: string) {
        const imgPlace = place.querySelector(`#${description}-gallery`) as HTMLDivElement;
        const descPlace = place.querySelector(`#${description}-intro`) as HTMLDivElement;

        this.images = Array.from(imgPlace.querySelectorAll("img")) as HTMLImageElement[];
        this.images.forEach((img) => (img.style.display = "none"));
        if (this.images[this.currentImage] !== undefined) {
            this.images[this.currentImage].style.display = "inline";
        }
        imgPlace.querySelector("#restaurant-left")?.addEventListener("click", () => this.previousImage());
        imgPlace.querySelector("#restaurant-right")?.addEventListener("click", () => this.nextImage());

        this.descriptions = Array.from(descPlace.querySelectorAll("div." + description)) as HTMLDivElement[];
        this.descriptions.forEach((desc) => (desc.style.display = "none"));
        if (this.descriptions[this.currentDescription]) {
            this.descriptions[this.currentDescription].style.display = "inline";
        }
    }

    public nextImage(): void {
        this.images[this.currentImage].style.display = "none";
        this.descriptions[this.currentDescription].style.display = "none";
        this.currentImage = (this.currentImage + 1) % this.images.length;
        this.currentDescription = (this.currentDescription + 1) % this.descriptions.length;
        this.images[this.currentImage].style.display = "inline";
        this.descriptions[this.currentDescription].style.display = "inline";
    }

    public previousImage(): void {
        this.images[this.currentImage].style.display = "none";
        this.descriptions[this.currentDescription].style.display = "none";
        this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
        this.currentDescription = (this.currentDescription - 1 + this.descriptions.length) % this.descriptions.length;
        this.images[this.currentImage].style.display = "inline";
        this.descriptions[this.currentDescription].style.display = "inline";
    }


}

export class CuisineGallery extends Gallery {
    constructor(place: HTMLDivElement) {
        super(place, "cuisine");
    }
}

export class RestaurantGallery extends Gallery {
    constructor(place: HTMLDivElement) {
        super(place, "restaurant");
    }
}