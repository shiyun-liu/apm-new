import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

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
    products : IProduct[] = [];

      //depedency injection
      constructor(private productService : ProductService) {}

      toggleImage() : void {
        this.showImage = !this.showImage;
      }

      ngOnInit(): void {
          this.products = this.productService.getProducts();
          this.filteredProducts = this.products;
      }

      performFilter(filteredBy : string) : IProduct[] {
        filteredBy = filteredBy.toLocaleLowerCase();
        return this.products.filter((product : IProduct) => product.productName.toLocaleLowerCase().includes(filteredBy));
      }

      onRatingClicked(message : string) : void {
        this.pageTitle = 'Product List: ' + message;
      }
}