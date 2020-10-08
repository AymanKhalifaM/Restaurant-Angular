import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[
    trigger('backImg',[
      state('unselected',style({
        transform: 'scale(1) translateY(0)',
        transformOrigin: '50% 16%'
      })),
      state('selected',style({
        transform: 'scale(1.2) translateY(-15px)',
        transformOrigin: 'top'
      })),
      transition('unselected <=> selected',animate('3s ease-out'))
    ])
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
