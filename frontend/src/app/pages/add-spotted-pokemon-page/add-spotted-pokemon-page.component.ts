import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { Pokemon } from '../../models/pokemon';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-add-spotted-pokemon-page',
  templateUrl: './add-spotted-pokemon-page.component.html',
  styleUrls: ['./add-spotted-pokemon-page.component.css']
})
export class AddSpottedPokemonPageComponent implements OnInit {
  public user: User;
  public pokemonList: Pokemon[];
  public pokemon: Pokemon;
  public latitude: number;
  public longitude: number;
  public addPokemonForm: FormGroup = new FormGroup({
    gender: new FormControl('', [Validators.required]),
    shiny: new FormControl('', [Validators.required])
  });

  constructor(
    private userService: UserService,
    private pokemonService: PokemonService,
    private router: Router
    ) { }

  /**
   * Setup pokemon
   */
  ngOnInit(): void {
    this.loadAllPokemon();
  }

  /**
   * Fetch all pokemon
   */
  loadAllPokemon(): void {
    this.pokemonService.getAllPokemon().subscribe(pokemon => this.pokemonList = pokemon);
  }

  /**
   * Handle click event for pokemon.
   * Set pokemon and reset the form
   */
  onClickPokemon(pokemon: Pokemon): void {
    this.addPokemonForm.reset();
    this.pokemon = pokemon;
  }

  /**
   * Handle submit and add pokemon to current user
   */
  onSubmit(): void {
    const formValues = this.addPokemonForm.value;
    this.userService.addPokemonToUser({
      gender: formValues.gender,
      shiny: formValues.shiny,
      latitude: this.latitude,
      longitude: this.longitude,
      id: this.pokemon.id,
      sprite: this.pokemon.sprite,
      name: this.pokemon.name
    })
    .then(_ => this.router.navigate(['/userstartpage']))
    .catch(res => console.log(res));
  }

  /**
   * Parent method for map for getting pokemon coordinates
   * @param latlng coordinates
   */
  getLatLng(latlng: any): void {
    this.latitude = latlng.lat;
    this.longitude = latlng.lng;
  }

}
