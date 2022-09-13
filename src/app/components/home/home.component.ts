import { Component, OnInit } from '@angular/core';
import { CountriesService } from "../../services/countries.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  regionList: any;

  constructor(
    public countriesService: CountriesService
  ) {
    this.regionList = [];
  }

  ngOnInit(): void {
    this.getRegions()
  }

  getRegions(){
    this.countriesService.getAllCountries().subscribe((data) => {
      for (let i=0; i < data.length; i++) {
        if (this.regionList.indexOf(data[i]?.region) === -1)
          this.regionList.push(data[i]?.region);
      }
    });
  }
}
