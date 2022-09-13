import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegionPageComponent } from './components/region-page/region-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { MatListModule } from "@angular/material/list";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { AboutMeComponent } from './components/dialogs/about-me/about-me.component';
import { MatDialogModule } from "@angular/material/dialog";
import { SelectedCountryComponent } from './components/dialogs/selected-country/selected-country.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegionPageComponent,
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
