import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { AboutMeComponent } from "../about-me/about-me.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.matDialog.open(AboutMeComponent);
  }

}
