import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ServiceService} from '../service/service.service';
import { Repo } from '../repo';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  repo: Repo
  repos: any;
  username: string;

  constructor( private service: ServiceService) {
    this.username = "maureengichuki";
  }

  getUser() {
    this.service.addUser(this.username);
    this.service.getUsers()
    this.user = this.service.user;


    this.service.findRepo().then(repos=>{
      this.repos = repos
    })
  }

  ngOnInit() {
    this.service.getUsers()
    this.user = this.service.user;


    this.service.findRepo().then(repos=>{
      this.repos = repos
    })
  }

}
