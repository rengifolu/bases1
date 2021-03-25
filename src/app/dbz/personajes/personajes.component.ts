import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

// @Input() personajes: Personaje[] = [];


get personajes(){
  return this.dbzService.personajes;
}
  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }

}
