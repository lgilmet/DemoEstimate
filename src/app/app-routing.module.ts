import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuartierAComponent } from "./forms/quartier-a/quartier-a.component";
import { QuartierBComponent } from "./forms/quartier-b/quartier-b.component";
import { QuartierCComponent } from "./forms/quartier-c/quartier-c.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "saint-henri-condo" },
  { path: "home", component: HomeComponent },
  { path: "saint-henri-condo", component: QuartierAComponent },
  { path: "vieux-montreal-condo", component: QuartierBComponent },
  { path: "ville-mont-royal-house", component: QuartierCComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
