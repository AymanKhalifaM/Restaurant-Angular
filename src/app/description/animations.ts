import {animate, state, style, transition, trigger} from '@angular/animations';

export const descTrigger = trigger('descState',[
  state('deafult',style({
    transform: 'rotate(-360deg)',
    opacity:'0'
  })),
  state('moved',style({
    transform: 'rotate(0deg)',
    opacity:'1'
  })),transition('deafult=>moved',[style({
    border:'1px solid orange'
  }),animate('5s ease-out')])
]) ;

export const descMealsTrigger = trigger('descMealsState',[
  state('deafult',style({
    transform: 'rotateX(80deg)',
    opacity: '0'
  })),
  state('moved',style({
    transform: 'rotateX(0)',
    opacity: '1'
  })),transition('deafult=>moved',[style({
    border:'1px solid orange'
  }),animate('5s ease-out')])
])
