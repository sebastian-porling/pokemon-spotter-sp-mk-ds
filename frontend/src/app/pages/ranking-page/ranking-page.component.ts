import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { ModifyObjectService } from "../../services/modify-object.service";

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.css']
})
export class RankingPageComponent implements OnInit {
  
    public users : User[];

    constructor(private userService : UserService,
      private modifyObjectService : ModifyObjectService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  public getUsers(){
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  sortusersByScore() {
    if(!this.users) return;

    return this.users.sort(this.modifyObjectService.sortByField("score"));
  }
  
  filterTopTen() {
    if(!this.users) return;
    return this.users.sort(this.modifyObjectService.sortByField("score")).slice(0,10)
  }
}
