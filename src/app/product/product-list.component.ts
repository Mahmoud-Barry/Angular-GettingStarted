import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent{
    pageTitle: string = "Product List";
    imageWidth : number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    products: any[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "gdn-0023",
            "releaseDate": "March 18, 2023",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "startRating": 4.2,
            "imageUrl":"assets/images/garden_cart.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "gdn-0023",
            "releaseDate": "March 18, 2023",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "startRating": 4.2,
            "imageUrl":"assets/images/garden_cart.png"
        }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
