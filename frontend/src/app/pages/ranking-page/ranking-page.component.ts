import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ModifyObjectService } from '../../services/modify-object.service';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.css'],
})
export class RankingPageComponent implements OnInit {
  public users: User[];

  constructor(
    private userService: UserService,
    private modifyObjectService: ModifyObjectService
  ) { }

  /**
   * Setup users
   */
  ngOnInit(): void {
    this.getUsers();
  }

  /**
   * Fetch all users from api
   */
  public getUsers(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  /**
   * Sort by score
   */
  sortUsersByScore(): User[] {
    if (!this.users) { return; }
    return this.users.sort(this.modifyObjectService.sortByField('score'));
  }

  /**
   * Sort by score and get the top ten
   */
  filterTopTen(): User[] {
    if (!this.users) { return; }
    return this.users
      .sort(this.modifyObjectService.sortByField('score'))
      .slice(0, 10);
  }
}
