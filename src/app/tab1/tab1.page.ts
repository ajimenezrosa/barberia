import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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





    ]




  constructor() {}

}
