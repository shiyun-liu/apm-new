import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector:'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls : ['./product-list.component.css']
  })
export class ProductListComponent implements OnInit{
    pageTitle  = 'Product List'; //will infer data type automatically, don't need pageTitle : string
    imageWidth = 50;
    imageMargin = 2;
    showImage : boolean = false;
    private _listFilter : string = '';
    get listFilter() : string {
      return this._listFilter;
    }
    set listFilter(value : string) {
      this._listFilter = value;
      console.log('In setter:', value);
      this.filteredProducts = this.performFilter(value);
    }

    filteredProducts : IProduct[] = [];
    products : IProduct[] = [
        {
          "productId": 1,
          "productName": "Leaf Rake",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2021",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "https://github.com/DeborahK/Angular-GettingStarted/blob/master/APM-Start/src/assets/images/leaf_rake.png?raw=true"
        },
        {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2021",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "https://github.com/DeborahK/Angular-GettingStarted/blob/master/APM-Start/src/assets/images/garden_cart.png?raw=true"
        },
        {
          "productId": 5,
          "productName": "Hammer",
          "productCode": "TBX-0048",
          "releaseDate": "May 21, 2021",
          "description": "Curved claw steel hammer",
          "price": 8.9,
          "starRating": 4.8,
          "imageUrl": "https://github.com/DeborahK/Angular-GettingStarted/blob/master/APM-Start/src/assets/images/hammer.png?raw=true"
        },
        {
          "productId": 8,
          "productName": "Saw",
          "productCode": "TBX-0022",
          "releaseDate": "May 15, 2021",
          "description": "15-inch steel blade hand saw",
          "price": 11.55,
          "starRating": 3.7,
          "imageUrl": "https://github.com/DeborahK/Angular-GettingStarted/blob/master/APM-Start/src/assets/images/saw.png?raw=true"
        },
        {
          "productId": 10,
          "productName": "Video Game Controller",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2020",
          "description": "Standard two-button video game controller",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "https://github.com/DeborahK/Angular-GettingStarted/blob/master/APM-Start/src/assets/images/xbox-controller.png?raw=true"
        }
      ];

      toggleImage() : void {
        this.showImage = !this.showImage;
      }
      ngOnInit(): void {
          console.log("run setter")
          this.listFilter = 'cart';
      }

      performFilter(filteredBy : string) : IProduct[] {
        filteredBy = filteredBy.toLocaleLowerCase();
        return this.products.filter((product : IProduct) => product.productName.toLocaleLowerCase().includes(filteredBy));
      }

      onRatingClicked(message : string) : void {
        this.pageTitle = 'Product List: ' + message;
      }
}