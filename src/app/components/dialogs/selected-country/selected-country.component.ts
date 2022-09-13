import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-selected-country',
  templateUrl: './selected-country.component.html',
  styleUrls: ['./selected-country.component.css']
})
export class SelectedCountryComponent implements OnInit {

  clear_currency : any;

  constructor(@Inject(MAT_DIALOG_DATA) public data : {shortname: string, flag: string, capital: string, population: number, currencies: string}) { }

  ngOnInit(): void {
    this.clear_currency = this.data.currencies[0];
  }
}
