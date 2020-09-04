import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ModifyObjectService } from '../../services/modify-object.service';
import { Observable, of } from 'rxjs';
import { __awaiter } from 'tslib';

@Component({
  selector: 'app-user-start-page',
  templateUrl: './user-start-page.component.html',
  styleUrls: ['./user-start-page.component.css']
})
export class UserStartPageComponent implements OnInit {
  public allPokemon: Pokemon[];
  public user: User;
  public spottedPokemon: any;
  public missingPokemon: any;
  public showSpotted: boolean;


  constructor(
    public pokemonService: PokemonService,
    private modifyObjectService: ModifyObjectService,
    private userService: UserService
  ) { }

  async ngOnInit(): Promise<any> {
    await this.getAllPokemons();
    await this.getUser();
    this.filterSpotted();
    this.filterMissing();

  }

  filterSpotted() {
    this.spottedPokemon = this.user.found_pokemon;
  }

  filterMissing() {
    if (this.user === undefined || this.allPokemon === undefined) return;

    this.missingPokemon = this.allPokemon
      .filter(pokemonGlobal => !this.spottedPokemon
        .find((pokemonSpotted: { id: number; }) => pokemonGlobal.id === pokemonSpotted.id));
  }


  sortPokemonBySpotted(): any {
    if (!this.allPokemon) { return; }
    return this.allPokemon.sort(this.modifyObjectService.sortByFieldRearest('spotted'));
  }
  filterTopTenSpotted(): any {
    if (!this.allPokemon) { return; }
    return this.allPokemon.sort(this.modifyObjectService.sortByFieldRearest('spotted')).slice(0, 10);
  }

  async getAllPokemons(): Promise<any> {
    this.allPokemon = await this.pokemonService.getAllPokemon().toPromise();
  }

  async getUser(): Promise<any> {
    this.user = await this.userService.getUser();
    console.log(this.user, this.allPokemon);

  }
}
