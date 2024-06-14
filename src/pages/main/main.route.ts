import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { FrameworksComponent } from "./frameworks/frameworks.component";
import { UtilsComponent } from "./utils/utils.component";

export const MAIN_ROUTE:Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'frameworks', component: FrameworksComponent},
  {path: 'utils', component: UtilsComponent},

]
