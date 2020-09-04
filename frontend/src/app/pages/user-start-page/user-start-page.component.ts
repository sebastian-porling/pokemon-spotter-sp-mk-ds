import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ModifyObjectService } from '../../services/modify-object.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-user-start-page',
  templateUrl: './user-start-page.component.html',
  styleUrls: ['./user-start-page.component.css']
})
export class UserStartPageComponent implements OnInit {
  public allPokemon: Pokemon[];
  public user: User;

  constructor(
    public pokemonService: PokemonService,
    private modifyObjectService: ModifyObjectService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.getAllPokemon();
    this.getUser();
  }


  sortPokemonBySpotted(): any {
    if (!this.allPokemon) { return; }
    return this.allPokemon.sort(this.modifyObjectService.sortByField('spotted'));
  }
  filterTopTenSpotted(): any {
    if (!this.allPokemon) { return; }
    return this.allPokemon.sort(this.modifyObjectService.sortByField('spotted')).slice(0, 10);
  }

  getAllPokemon(): void {
    this.pokemonService.getAllPokemon()
      .subscribe(allPokemon => this.allPokemon = allPokemon);
  }

  async getUser(): Promise<any> {
    this.user = await this.userService.getUser();
    console.log(this.user);
  }
}
