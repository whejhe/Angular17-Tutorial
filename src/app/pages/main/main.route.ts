import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { FrameworksComponent } from "./frameworks/frameworks.component";
import { UtilsComponent } from "./utils/utils.component";
import { GuiasComponent } from "./guias/guias.component";

export const MAIN_ROUTE:Routes = [
  {path: '', component: UtilsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'frameworks', component: FrameworksComponent},
  {path: 'utils', component: UtilsComponent},
  {path: 'guias', component: GuiasComponent},
  {path: '**', redirectTo: ''}

]
