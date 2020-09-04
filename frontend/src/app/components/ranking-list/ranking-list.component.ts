import { UserService } from '../../services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.css']
})
export class RankingListComponent implements OnInit {

  //public users: User[];
  

  // userListByScore = this.users;
  // topTen = this.users;
  constructor(public userService: UserService, private location: Location) { }

  @Input() users : User[];
  @Input() isSticky : boolean;

  ngOnInit(): void {
    
    // this.getUsers();
    // this.sortusersByScore();
    // this.filterTopTen();
  }

  // getUsers(): void {
  //   this.userService.getUsers()
  //     .subscribe(users => this.users = users);
  // } 

  // sortusersByScore() {
  //   this.userListByScore = this.users.sort((a, b) => b.score - a.score);
  // }

  // filterTopTen() {
  //   this.topTen = this.userListByScore.slice(0, 10);
  // }

  // goBack(): void {
  //   this.location.back();
  // }
}
