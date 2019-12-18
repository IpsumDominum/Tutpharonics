import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  lightOn:boolean;
  constructor() { }

  ngOnInit() {
    this.lightOn = false;
  }
  toggleLight(){
    let body = document.getElementById('mainbox');
      if(this.lightOn){
        body[0].style.background = "black";
        this.lightOn = false;
      }else{
        body[0].style.backgroundImage = "url('assets/background.png')";
        this.lightOn = true;
      }
  }

}
