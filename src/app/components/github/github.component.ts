import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import axios from 'axios';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styles: []
})
export class GithubComponent {

  user:any;
 
  repos: any ;
  username: string;
  title:any;
  id:any;
  readable:any;
  preview:any;
  title_short:any;



  constructor(private githubService: GithubService) { }

  search() {
    //alert(this.username)
    localStorage.setItem("username", this.username);
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${this.username}`)
    .then(res => {
    // this.user = ({
   
        //title: res.data.title,
        //readable: res.data.readable,
        //preview: res.data.preview,
        //title_short: res.data.title_short,
     // });
     // var obj = res.data;
      
      //this.user({ persons });
      this.user = res.data.data;
      console.log(this.user);
      //alert(this.user)
      if(res.data.data == "")
      {
        alert("there is no such artist")
      }

    })
      
    //this.githubService.updateUsername(this.username);
    //this.githubService.getUser().subscribe(user => this.user = user);
    //this.githubService.getRepos().subscribe(repos => this.repos = repos);
    
  }

  reset() {
    this.user = null;
    this.username = null;
  }

}
