import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AfricaPageComponent } from "./components/africa-page/africa-page.component";
import { HomeComponent } from "./components/home/home.component";
import { AmericaPageComponent } from "./components/america-page/america-page.component";
import { AsiaPageComponent } from "./components/asia-page/asia-page.component";
import { OceaniaPageComponent } from "./components/oceania-page/oceania-page.component";
import { EuropePageComponent } from "./components/europe-page/europe-page.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'africa', component: AfricaPageComponent},
  {path:'america', component: AmericaPageComponent},
  {path:'asia', component: AsiaPageComponent},
  {path:'europe', component: EuropePageComponent},
  {path:'oceania', component: OceaniaPageComponent},
  {path:'**', component: PageNotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
