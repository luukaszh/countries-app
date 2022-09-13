import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { RegionPageComponent } from "./components/region-page/region-page.component";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:':name', component: RegionPageComponent},
  {path:'**', component: PageNotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
