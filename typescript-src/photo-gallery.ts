const IMAGE_KEYWORD = "gallery";
const DESCRIPTION_KEYWORD = "intro";

class Gallery {
    private images: HTMLImageElement[];
    private currentImage: number = 0;
    private currentDescription: number = 0;
    private descriptions: HTMLDivElement[];

    constructor(place: HTMLDivElement, description: string) {
        const imgPlace = Array.from(place.children).filter(
            (child) => child.classList.contains(IMAGE_KEYWORD)
        )[0] as HTMLDivElement;
        this.images = Array.from(imgPlace.children).filter(
            (child) => child.tagName === "IMG"
        ) as HTMLImageElement[];
        this.images.forEach((img) => (img.style.display = "none"));
        if (this.images[this.currentImage] !== undefined) {
            this.images[this.currentImage].style.display = "block";
        }


        const descPlace = Array.from(place.children).filter(
            (child) => child.classList.contains(DESCRIPTION_KEYWORD)
        )[0] as HTMLDivElement;
        this.descriptions = Array.from(descPlace.children).filter(
            (child) => child.tagName === "DIV" && child.classList.contains(description)
        ) as HTMLDivElement[];
        this.descriptions.forEach((desc) => (desc.style.display = "none"));
        if (this.descriptions[this.currentDescription]) {
            this.descriptions[this.currentDescription].style.display = "block";
        }
    }

    public nextImage(): void {
        this.images[this.currentImage].style.display = "none";
        this.descriptions[this.currentDescription].style.display = "none";
        this.currentImage = (this.currentImage + 1) % this.images.length;
        this.currentDescription = (this.currentDescription + 1) % this.descriptions.length;
        this.images[this.currentImage].style.display = "block";
        this.descriptions[this.currentDescription].style.display = "block";
    }

    public previousImage(): void {
        this.images[this.currentImage].style.display = "none";
        this.descriptions[this.currentDescription].style.display = "none";
        this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
        this.currentDescription = (this.currentDescription - 1 + this.descriptions.length) % this.descriptions.length;
        this.images[this.currentImage].style.display = "block";
        this.descriptions[this.currentDescription].style.display = "block";
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