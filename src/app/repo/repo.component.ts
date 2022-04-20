import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repos:any;
  repo:any;

  constructor(private service:ServiceService) {
    this.repo = 'portfolio';

   }

   getUserRepo(){
     this.service.addRepo(this.repo);
     this.service.getRepo().then(replies=>{
      this.repos = replies['items'];
      console.log(this.repos)
    });

   }

  

  ngOnInit() {
    this.service.getRepo().then(replies=>{
      this.repos = replies['items'];
      console.log(this.repos)
    });
  }


}
