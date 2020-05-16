// import { Injectable } from '@angular/core';
// // import { Storage } from '@ionic/storage';
// // import { Article } from '../pages/interfaces/interfaces';
 
// @Injectable({
//   providedIn: 'root'
// })
// export class DatalocalService {

// // noticias: Article[] = [];

//   constructor( private storage: Storage ) {

//         this.cargarFavoritos();
//    }

//    guardarNoticas( noticias: Article){
//       // this.storage.delete('favoritos');
//       const existe = this.noticias.find( noti => noti.title === noticias.title);

//       if (!existe){

//        this.noticias.unshift( noticias);
//        this.storage.set('favoritos', this.noticias);
//       }
//    }

//    async cargarFavoritos() {
//       const favoritos = await  this.storage.get('favoritos');

//         if ( favoritos ){
//           this.noticias = favoritos;
//         } 
      
//    }

//    borrarNoticas(noticia: Article ) {
//      this.noticias = this.noticias.filter( noti => noti.title !== noticia.title);
//      this.storage.set('favoritos', this.noticias);
//    }

// }
