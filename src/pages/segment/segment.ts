import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UsuariosProvider } from "../../providers/usuarios/usuarios";
import { PhotosProvider } from "../../providers/photos/photos";

/**
 * Generated class for the SegmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segment',
  templateUrl: 'segment.html',
})
export class SegmentPage {

  usuarios;
  photos;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public usuariosProvider: UsuariosProvider,
    public photosProvider: PhotosProvider
  ) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegmentPage');
  }

  downUsuarios() {
    this.usuariosProvider.getUsuarios().subscribe(
      (data) => { this.usuarios = data; },
      (error) => { console.log(error); }
    );
  }

  downPhotos() {
    this.photosProvider.getPhotos().subscribe(
      (data) => { this.photos = data },
      (error) => { console.log(error); }
    );
  }

}
