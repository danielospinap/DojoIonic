import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PhotosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PhotosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PhotosProvider Provider');
  }

  getPhotos() {
    return this.http.get("https://jsonplaceholder.typicode.com/photos");
  }
}
