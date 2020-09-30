import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { DescriptionComponent } from './description/description.component';
import { MealsComponent } from './description/meals/meals.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    DescriptionComponent,
    MealsComponent,
    HowItWorksComponent,
    LoadingSpinnerComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
