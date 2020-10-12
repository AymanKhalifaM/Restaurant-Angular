import { Component, Input } from '@angular/core';
import {descMealsTrigger, descTrigger} from '../animations';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
  animations:[descTrigger,descMealsTrigger]
})
export class MealsComponent  {

  @Input()featuresMeals:boolean;
imageSrc =[
  "https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/rest%2F1.jpg?alt=media&token=589f29cd-3454-4444-9667-d07a9c51c135",
  "https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/rest%2F2.jpg?alt=media&token=76ea3030-729a-4536-819b-065befad451b",
  "https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/rest%2F3.jpg?alt=media&token=0b51360d-4354-4a3e-8e39-a3541344318e",
  "https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/rest%2F4.jpg?alt=media&token=cd579bc7-ef71-478f-b16b-509a68c34b33",
  "https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/rest%2F5.jpg?alt=media&token=51a1cf9d-0de8-466c-a8a6-eb1c7848cd45",
  "https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/rest%2F6.jpg?alt=media&token=bf2b7d61-209f-42e2-845d-484080949d92",
  "https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/rest%2F7.jpg?alt=media&token=1b096a83-322b-4b94-bcb2-42871102141b",
  "https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/rest%2F8.jpg?alt=media&token=b7c89d9d-429e-422f-9988-bf0d7fc46bd1"
]
  img="https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/rest%2F8.jpg?alt=media&token=b7c89d9d-429e-422f-9988-bf0d7fc46bd1"

}
