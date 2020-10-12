import { animate, state, style, transition, trigger } from '@angular/animations';

export const headerTrigger =  trigger('backImg',[
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