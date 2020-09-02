import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from "../../models/user";

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.css']
})
export class RankingPageComponent implements OnInit {
    sortByScore = (u1, u2) => u2.score - u1.score;
  
    public users : User[];

    constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  public getUsers(){
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  sortusersByScore() {
    return this.users.sort(this.sortByScore);
  }

  filterTopTen() {
    return this.users.sort(this.sortByScore).slice(0,10)
  }
}
