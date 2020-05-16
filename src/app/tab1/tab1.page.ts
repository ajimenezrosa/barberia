import { Component, OnInit } from '@angular/core';
import { ToastController, ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public Servicios = [

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

   public MensajeUser = "Manuel. què quieres hacerte?"
  //  public toastController: ToastController
   
  constructor(
    // private socialSharing: SocialSharing,
    private actionSheetCtrl: ActionSheetController,
    private socialShrng: SocialSharing,
    public toastController: ToastController

  ) {}



  async presentToast( message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }



  ngOnInit() {
    // console.log('Favorito: ' , enFavoritos);
  }


  async lanzarMenu( indiceId: number ){

    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [{
          text: 'Solicitar',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Share clicked');
          // this.socialShrng.share(
          // "this.noticias[indiceId].title", 
          // "this.noticias[indiceId].source.name",
          // '',
          // "www.google.com"
          // );
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
        // cssClass: 'action-dark',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          this.presentToast('Cancelado')
        }
      }]
    });
    await actionSheet.present();

}


}