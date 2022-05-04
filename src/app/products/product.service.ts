import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IProduct } from "./product";
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn:'root'
})
export class ProductService {
    private productUrl = 'assets/product.json';
    constructor(private http : HttpClient){}
    getProducts() : Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl)
        .pipe(
            tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err : HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            //it means client-side or network error occurred
            errorMessage =  `An error occurred: ${err.error.message}`;
        } else {
            //server side error, the response body may contain clues as to what went wrong
            errorMessage = `Server return code : ${err.status}, error message is ${err.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}