import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent  {
  steps = [
    "Choose the subscription plan that best fits your needs and sign up today",
    "Choose the Meal You Want From Our APPLICATION",
    "You Can Download The App At Any Smart Phone"]

    appleImg="https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/rest%2Fdownload-app.svg?alt=media&token=453a152a-48a6-4c45-bebd-60f048007eb1"
    andriodImg="https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/rest%2Fdownload-app-android.png?alt=media&token=61820461-6b40-4bde-aef0-095147a193c9"
  mobileImage = "https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/rest%2Fapp-iPhone.png?alt=media&token=1a765892-9e19-43f6-abdd-c5462404e00b"

  
}
