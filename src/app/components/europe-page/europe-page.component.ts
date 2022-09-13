import { Component, OnInit } from '@angular/core';
import {CountriesService} from "../../services/countries.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-europe-page',
  templateUrl: './europe-page.component.html',
  styleUrls: ['./europe-page.component.css']
})
export class EuropePageComponent implements OnInit {

  countriesList: any;

  constructor(
    public countriesService: CountriesService,
    public http: HttpClient
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
    this.countriesService.serviceDialog(index, this.countriesList);
  }
}
