import { Injectable } from "@angular/core";
import {Personaje} from '../interface/dbz.interface'


@Injectable()
export class DbzService {


private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];
  
  get personajes(): Personaje[]{
    return [...this._personajes];
  }

    constructor (){
        console.log('Servicio Inicializado')
    }


      agregarNuevoPersonaje(personaje: Personaje){
    // debugger
    this._personajes.push(personaje);
    console.log(this.personajes)
  }
}