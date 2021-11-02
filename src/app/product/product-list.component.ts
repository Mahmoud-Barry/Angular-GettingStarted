import { Component, OnInit } from "@angular/core";
import { IProduct } from './products';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    imageWidth : number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    
    private _listFilter: string = '';

    get listFilter(): string{
        return this._listFilter;
    }

    set listeFilter(value: string){
        this._listFilter = value;
        console.log('in setter', value);
    }



    products: IProduct[] = [
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

    ngOnInit() : void {
        this._listFilter = 'cart';
    }
}
