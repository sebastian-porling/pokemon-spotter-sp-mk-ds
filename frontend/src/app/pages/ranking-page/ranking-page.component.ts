import { USERS } from '../../mock-data/mock-users';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.css']
})
export class RankingPageComponent implements OnInit {
users = USERS;

userListByScore = USERS;
topTen = USERS;


    
    constructor(private location: Location) { }

  ngOnInit(): void {
    this.sortusersByScore();
    this.filterTopTen();
  }

  sortusersByScore(){
   this.userListByScore = this.users.sort((a, b) => b.score - a.score);
  }

  filterTopTen(){
   this.topTen = this.userListByScore.slice(0, 10);
  }

  goBack(): void {
    this.location.back();
  }

}
