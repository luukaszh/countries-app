import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { SelectedCountryComponent } from "../components/dialogs/selected-country/selected-country.component";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {


  constructor(
    private http: HttpClient,
    private matDialog: MatDialog,
  ) {}

  getAllCountries(): Observable<any> {
    return this.http.get<any>('https://restcountries.com/v3.1/all');
  }

  serviceDialog(index: number, countriesList: any){
    this.matDialog.open(SelectedCountryComponent,
      {
        data: {
          shortname: countriesList[index].cca3,
          flag: countriesList[index].flags.png,
          capital: countriesList[index].capital,
          population: countriesList[index].population,
          currencies: Object.values(countriesList[index].currencies),
        },
      });
  }
}
