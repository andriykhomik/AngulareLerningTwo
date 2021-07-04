import { Component } from '@angular/core';
import {UserService} from '../../services/users/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[];
  constructor(private userService: UserService) {
    userService.user().subscribe(data => this.users = data);
  }
}
