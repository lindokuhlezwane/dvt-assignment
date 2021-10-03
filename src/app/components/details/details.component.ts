import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit {
  user:any;
  constructor() { }

  ngOnInit() {
  var artist =  localStorage.getItem("username");
    //alert(car)
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${artist}`)
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
     
     // alert(this.user)

    })

  }

}
