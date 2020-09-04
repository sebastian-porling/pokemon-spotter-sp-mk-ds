import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from "src/app/models/pokemon";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  @Input() allPokemon: Pokemon[];
  @Input() showSpotted: boolean;
  
  constructor() { }

  ngOnInit(): void {
    
  }
  
}
