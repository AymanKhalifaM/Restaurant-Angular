import { headerTrigger } from './animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[
   headerTrigger
  ]
})
export class HeaderComponent implements OnInit {
  backImg = "unselected" ;
  @Output() featuresClicked = new EventEmitter<boolean>(false);
  constructor() { }

  ngOnInit() {
    this.backImg = "selected";
    setTimeout(() => {
      this.backImg ="unselected"
    }, 300);
  }
  featuresClickedFn(){
    this.featuresClicked.emit(true);

  }
}
