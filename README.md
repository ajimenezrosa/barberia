# barberia
![barberia](https://static.vecteezy.com/system/resources/previews/000/539/439/non_2x/barbershop-logo-design-on-the-white-background-vector.jpg)

#  Creacion de pantalla de solicitud de servicios

~~~json
 [

      {
        icono: "Tijeras",
        title: "Corte de pelo Caballeros",
        tiempo: "30 minutos",
        costo: "$550.00",
        ajuste: "**"

      },
      {
        icono: "Tijeras",
        title: "Corted de pelo niǹos",
        tiempo: "30 minutos",
        costo: "$550.00",
        ajuste: "**"

      },
      {
        icono: "Tijeras",
        title: "Barba y cerquillo",
        tiempo: "30 minutos",
        costo: "$550.00",
        ajuste: "**"

      },
      {
        icono: "Tijeras",
        title: "Corte de pelo y barba",
        tiempo: "30 minutos",
        costo: "$550.00",
        ajuste: "**"

      },
      {
        icono: "Tijeras",
        title: "Limpiesa Facial profunda",
        tiempo: "30 minutos",
        costo: "$550.00",
        ajuste: "**"

      },
      {
        icono: "Tijeras",
        title: "Corte y estilismo",
        tiempo: "30 minutos",
        costo: "$550.00",
        ajuste: "**"

      }





    ];
~~~
## de este ***json*** se extraeran los servicios que se ofreceran en nuestra App.

##  el mismo puede ser consumido por nosotros ya sea via un servicio o de forma estatica depende de que sea mas conveniente.

## 

declaracion de codigo para captura de mensajeria.
~~~typescript
  async presentToast( message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
~~~

## Debemos importar la Clase 
~~~typescript
import { ToastController } from '@ionic/angular';
~~~

Una muestra de la aplicacion del esta clase es la siguiente
~~~typescript
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [{
          text: 'Solicitar',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Share clicked');
          this.presentToast('Solicitar Servicio');
        }
      }, 
      {
        text: "Compartir",
        icon: "share",
        cssClass: 'action-dark',
        handler: () => {
          console.log('Share clicked');
          this.socialShrng.share(
          "this.noticias[indiceId].title", 
          "this.noticias[indiceId].source.name",
          '',
          "www.google.com"
          );
          this.presentToast('Compartiendo');
        }
      }, 
      {
        text: 'Cancel',
        icon: 'trash',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          this.presentToast('Cancelado')
        }
      }]
    });
    await actionSheet.present();

}
~~~


## El cssClas que esta asignado en este caso es uno creado por nosotros para dar un formato a ***toastController*** y asi se vea todo de form Dark.

Anexo la clase:
~~~css
.action-dark {
    background-color: var( --ion-color-dark ) !important;
    color: white !important;

}

.action-dark ion-icon {
    color: white !important;
}
~~~




|Estilo app 1|logo ejemplo progrmas Similar 2| logo ejemplo progrmas Similar 3|
|--------|----------|----------|
| ![infinite-scroll](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwWIEOFEUX8VOAPDn59GImBtTpRVhN2ZWhQvSdZdCHSnzb8d3A&usqp=CAU) | ![infinite-scroll](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuqxL58oFrtHTj_yJ5GL29o3f397NIbOg2TvLAMdQZsNfONiD0&usqp=CAU) | ![infinite-scroll](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbeieJsmVxE84b5swcQi_J6v3bH_lbmChX4qmYymTO1nrj-aCU&usqp=CAU)
|