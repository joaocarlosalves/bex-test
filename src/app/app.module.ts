import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardInfoFormComponent } from './components/card-info-form/card-info-form.component';
import { CardStepsComponent } from './components/card-steps/card-steps.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    MenuComponent,
    FooterComponent,
    CardInfoFormComponent,
    CardStepsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
