import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ModifyObjectService } from '../../services/modify-object.service';
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
  public topTenPokemon: any;
  public showSpotted: boolean;

  constructor(
    public pokemonService: PokemonService,
    private modifyObjectService: ModifyObjectService,
    private userService: UserService
  ) { }

  /**
   * Fetch all data and filter
   */
  async ngOnInit(): Promise<any> {
    await this.getAllPokemon();
    await this.getUser();
    this.filterSpotted();
    this.filterMissing();
    this.filterTopTenSpotted();
  }

  /**
   * Get all the spotted pokemon
   */
  filterSpotted(): void {
    this.spottedPokemon = this.user.found_pokemon;
  }

  /**
   * Filter out the already spotted pokemon from all pokemon list
   */
  filterMissing(): void {
    if (this.user === undefined || this.allPokemon === undefined) { return; }
    this.missingPokemon = this.allPokemon
      .filter(pokemonGlobal => !this.spottedPokemon
        .find((pokemonSpotted: { id: number; }) => pokemonGlobal.id === pokemonSpotted.id));
  }

  /**
   * Sort all pokemon by rarity
   */
  sortPokemonBySpotted(): any {
    if (!this.allPokemon) { return; }
    return this.allPokemon.sort(this.modifyObjectService.sortByFieldRarest('spotted'));
  }

  /**
   * Get the rarest pokemon spotted by the current user
   */
  filterTopTenSpotted(): any {
    if (this.allPokemon !== undefined && this.user !== undefined) {
      const filteredPokemon = this.allPokemon.filter(function(element) {
        return this.map(p => p.id).indexOf(element.id) >= 0;
      }, this.user.found_pokemon);
      this.topTenPokemon =  filteredPokemon.sort(this.modifyObjectService.sortByFieldRarest('spotted')).slice(0, 10);
    }
  }

  /**
   * Get all pokemon from server
   */
  async getAllPokemon(): Promise<any> {
    this.allPokemon = await this.pokemonService.getAllPokemon().toPromise();
  }

  /**
   * Get user information from server
   */
  async getUser(): Promise<any> {
    this.user = await this.userService.getUser();
  }

}
