import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'restaurant';
  features:boolean;
  spinner = true;

  featuresFn(event:boolean){
    this.features = event;
  }
ngOnInit(){
  setTimeout(() => {
    this.spinner =false
  }, 5000);
}  
}
