import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pruebaruta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pruebaruta.component.html',
  styleUrl: './pruebaruta.component.css'
})
export class PruebarutaComponent implements OnInit, OnDestroy {

  numero? : number;
  texto? : string;
  esVerdadero : boolean = false;
  cualquierCosa : any;
  listaNumeros : number[] = []
  dia? : string;

  name (){
    let numero : number;
    let texto : string;
    let esVerdadero : boolean;
    let listaNumeros : number[];
    let hoy : string = diasDeLaSemana.Sabado;
    this.dia = hoy;
    console.log(hoy)
  }

  ngOnInit(){
    this.numero = 8
  }

  ngOnDestroy(){
    window.open('https://google.com', '_blank')
  }
}

enum diasDeLaSemana {
  Lunes = "Lunes",
  Martes = "Martes",
  Miercoles = "Miercoles",
  Jueves = "Jueves",
  Viernes = "Viernes",
  Sabado = "Sabado",
  Domingo = "Domingo"
}
