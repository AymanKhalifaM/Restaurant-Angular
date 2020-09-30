import { DiscModel } from './desc.model';
import { Component, Input, OnInit } from '@angular/core';
import { faCarrot, faClock, faInfinity, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  
  @Input() featuresNew  ;

  descIconAndHeadLine : DiscModel[] =[
    new DiscModel(faInfinity,'Up to 365 days/year',"Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style."),
    new DiscModel(faClock,'Up tp 24/7 all days',"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sint laudantium illo sequi facere. Voluptas."),
    new DiscModel(faCarrot,'Lorem ipsum dolor sit','Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sint laudantium illo sequi facere. Voluptas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sint laudantium illo sequi facere. Voluptas.'),
    new DiscModel(faShoppingBasket,'Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sint laudantium illo sequi facere. Voluptas.')
  ]

  constructor() { }

  ngOnInit() {
  }

}
