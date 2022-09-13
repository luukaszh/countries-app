import { Component, OnInit } from '@angular/core';
import { CountriesService } from "../../services/countries.service";
import { HttpClient } from "@angular/common/http";
import { SelectedCountryComponent } from "../selected-country/selected-country.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-america-page',
  templateUrl: './america-page.component.html',
  styleUrls: ['./america-page.component.css']
})
export class AmericaPageComponent implements OnInit {

  countriesList: any;

  constructor(
    public countriesService: CountriesService,
    public http: HttpClient,
    public matDialog: MatDialog
  ) {
    this.countriesList = [];
  }

  ngOnInit(): void {
    this.getCountries()
  }

  getCountries(){
    this.countriesService.getAllCountries().subscribe((data) => {
      this.countriesList = data;
    });
  }

  openDialog(index: number){
    this.matDialog.open(SelectedCountryComponent,
      {
        data: {
          shortname: this.countriesList[index].cca3,
          flag: this.countriesList[index].flags.png,
          capital: this.countriesList[index].capital,
          population: this.countriesList[index].population,
          currencies: Object.values(this.countriesList[index].currencies),
        },
      });
  }

}
