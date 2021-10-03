import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubService {

  username: string;

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=beyonce`);
    //return this.http.get(`https://api.github.com/users/${this.username}`);

  }

  getRepos() {
    return this.http.get(`https://api.github.com/users/${this.username}/repos`);
  }

  updateUsername(username: string) {
    this.username = username;
  }

}
