import { UserService } from '../../services/user.service';
import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.css']
})
export class RankingListComponent {
  @Input() users: User[];
  @Input() isSticky: boolean;

  constructor(
    public userService: UserService,
    private location: Location
    ) { }

}
