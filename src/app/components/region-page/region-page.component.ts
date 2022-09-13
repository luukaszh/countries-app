import { Component, OnInit } from '@angular/core';
import { CountriesService } from "../../services/countries.service";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-region-page',
  templateUrl: './region-page.component.html',
  styleUrls: ['./region-page.component.css']
})
export class RegionPageComponent implements OnInit {

  countriesList: any;

  region!: { name: string };

  constructor(
    public countriesService: CountriesService,
    public http: HttpClient,
    private activateRoute: ActivatedRoute,
  ) {
    this.countriesList = [];
  }

  ngOnInit(): void {
    this.getCountries()

    this.region = {
      name: this.activateRoute.snapshot.params['name']
    }
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
