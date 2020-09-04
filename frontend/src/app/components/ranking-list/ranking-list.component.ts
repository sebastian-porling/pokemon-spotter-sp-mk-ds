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

  constructor(public userService: UserService, private location: Location) { }

  @Input() users: User[];
  @Input() isSticky: boolean;

  ngOnInit(): void {

  }
}
