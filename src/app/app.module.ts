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
import { CitiesComponent } from './cities/cities.component';
import { CustomersComponent } from './cities/customers/customers.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    DescriptionComponent,
    MealsComponent,
    HowItWorksComponent,
    LoadingSpinnerComponent,
    CitiesComponent,
    CustomersComponent,
    ContactComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
