import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user';


@Component({
  selector: 'app-all-ranking-list',
  templateUrl: './all-ranking-list.component.html',
  styleUrls: ['./all-ranking-list.component.css']
})
export class AllRankingListComponent implements OnInit {

  public users: User[];
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }



  getUsers() : void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
}
