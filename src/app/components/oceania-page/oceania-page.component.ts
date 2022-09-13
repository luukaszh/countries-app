import { Component, OnInit } from '@angular/core';
import { CountriesService } from "../../services/countries.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-oceania-page',
  templateUrl: './oceania-page.component.html',
  styleUrls: ['./oceania-page.component.css']
})
export class OceaniaPageComponent implements OnInit {

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
