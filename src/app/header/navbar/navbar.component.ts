import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  imgSrc ="https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/rest%2Flogo-white.png?alt=media&token=c1c52cde-b366-4de0-9e01-11e21a511c32"


  constructor() { }

  ngOnInit() {
  }
  toWorks(){
    document.getElementById('works').scrollIntoView({behavior:"smooth",block:"start"})
  }

}
