import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AfricaPageComponent } from './components/africa-page/africa-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { AmericaPageComponent } from './components/america-page/america-page.component';
import { AsiaPageComponent } from './components/asia-page/asia-page.component';
import { EuropePageComponent } from './components/europe-page/europe-page.component';
import { OceaniaPageComponent } from './components/oceania-page/oceania-page.component';
import { HttpClientModule } from "@angular/common/http";
import { MatListModule } from "@angular/material/list";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MatDialogModule } from "@angular/material/dialog";
import { SelectedCountryComponent } from './components/selected-country/selected-country.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AfricaPageComponent,
    AmericaPageComponent,
    AsiaPageComponent,
    EuropePageComponent,
    OceaniaPageComponent,
    AboutMeComponent,
    SelectedCountryComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatListModule,
    ScrollingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
