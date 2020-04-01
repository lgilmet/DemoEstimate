import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuartierAComponent } from "./forms/quartier-a/quartier-a.component";
import { QuartierBComponent } from "./forms/quartier-b/quartier-b.component";
import { QuartierCComponent } from "./forms/quartier-c/quartier-c.component";
import { HomeComponent } from "./pages/home/home.component";
import { QuartierDComponent } from "./forms/quartier-d/quartier-d.component";
import { QuartierEComponent } from "./forms/quartier-e/quartier-e.component";
import { QuartierFComponent } from "./forms/quartier-f/quartier-f.component";
import { QuartierGComponent } from "./forms/quartier-g/quartier-g.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "saint-henri-condo" },
  { path: "home", component: HomeComponent },
  { path: "saint-henri-condo", component: QuartierAComponent },
  { path: "plateau", component: QuartierBComponent },
  { path: "ville-mont-royal-house", component: QuartierCComponent },
  { path: "bois-franc-house", component: QuartierDComponent },
  { path: "vieux-montreal", component: QuartierEComponent },
  { path: "HoMa", component: QuartierFComponent },
  { path: "rosemont", component: QuartierGComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
