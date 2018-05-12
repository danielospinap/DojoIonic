import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosProvider {

  constructor(public http: HttpClient, httpClientModule: HttpClientModule) {
    console.log('Hello UsuariosProvider Provider');
  }

  getUsuarios () {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

}
