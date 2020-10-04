import { CityModel } from "./city.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cities",
  templateUrl: "./cities.component.html",
  styleUrls: ["./cities.component.css"],
})
export class CitiesComponent implements OnInit {
  city: CityModel[] = [
    new CityModel(
      "https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/rest%2Flondon.jpg?alt=media&token=a30bb33a-1f35-47d1-8bfe-e5303c34ab66",
      "london",
      "1600+ happy eaters",
      " 60+ top chefs",
      "@omx"
    ),
    new CityModel(
      "https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/rest%2Fberlin.jpg?alt=media&token=e3a28592-ea04-472b-8636-46330cfce36a",
      "Berlin",
      "115+ happy eaters",
      " 65+ top chefs",
      "@om_lx"
    ),
    new CityModel(
      "https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/rest%2Flisbon-3.jpg?alt=media&token=20ea7377-e0a8-46c4-9f63-0decb9bc077b",
      "Lisbon",
      "160+ happy eaters",
      " 600+ top chefs",
      "@omnif_lx"
    ),
    new CityModel(
      "https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/rest%2Fsan-francisco.jpg?alt=media&token=1d06a642-bb81-4672-b1de-9d23138eb88c",
      "San Francisco",
      "200+ happy eaters",
      " 6+ top chefs",
      "@omnifood"
    ),
  ];
  constructor() {}

  ngOnInit() {}
}
