import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  user: User
  repos:any;
  username = 'maureengichuki';
  repo = 'portforlio';

  constructor(private http: HttpClient) { 
    this.user = new User('',0,'',0, 0);
    this.http = http;
    
  }

  getUsers(){
    interface ApiResponse{
      login:string;
      id:number;
      avatar_url:string;
      followers:number,
      following:number;
    }
    let  promise = new Promise((resolve, reject)=>{
      return this.http.get<ApiResponse>('https://api.github.com/users/' + this.username).toPromise().then(response=>{
        this.user.login = response.login
        this.user.id = response.id
        this.user.avatar_url = response.avatar_url
        this.user.followers = response.followers
        this.user.following = response.following

        console.log(response)

        resolve(response)
      },
      error=>{
        reject(error)

      })
    })
    return promise
  }
  findRepo(){

    let promise = new Promise((resolve, reject)=>{
      return this.http.get("https://api.github.com/users/"+this.username+"/repos").toPromise().then(reply=>{
        reply
        resolve(reply)
      },
      error=>{
        reject(error)
      })
    })
    return promise
  }

  getRepo(){
    let promise = new Promise((resolve, reject)=>{
      return this.http.get("https://api.github.com/search/repositories?q="+this.repo).toPromise().then(replies=>{
        resolve(replies)
      },
      error =>{
        reject(error)
      })
    })
    return promise
  }
  addUser(user:string){
    this.username = user;
  }
  addRepo(userrepo:string){
    this.repo = userrepo;
  }
}
