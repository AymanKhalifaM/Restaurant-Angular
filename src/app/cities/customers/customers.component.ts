import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"],
})
export class CustomersComponent implements OnInit {
  customers = [
    {
      img:"https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/rest%2Fcustomer-1.jpg?alt=media&token=aea539b7-d850-419d-9915-783f832fe8af",
      name: "Ayman Khalifa",
      text:
        "Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/rest%2Fcustomer-2.jpg?alt=media&token=5a69b2a1-945b-48a7-bd1f-0488e95c0dd5",
      name: "Mrs Nola",
      text:
        "Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/rest%2Fcustomer-3.jpg?alt=media&token=dc25c3c4-3682-4adb-a1e6-494b54b4bb79",
      name: "Mr Ayman Moka",
      text:
        "Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
