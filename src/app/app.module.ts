import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuartierAComponent } from "./forms/quartier-a/quartier-a.component";
import { QuartierBComponent } from "./forms/quartier-b/quartier-b.component";
import { QuartierCComponent } from "./forms/quartier-c/quartier-c.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatSliderModule } from "@angular/material/slider";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { HomeComponent } from "./pages/home/home.component";
import { QuartierDComponent } from "./forms/quartier-d/quartier-d.component";
import { QuartierEComponent } from "./forms/quartier-e/quartier-e.component";
import { QuartierFComponent } from "./forms/quartier-f/quartier-f.component";
import { QuartierGComponent } from "./forms/quartier-g/quartier-g.component";
import { QuartierHComponent } from "./forms/quartier-h/quartier-h.component";
import { QuartierIComponent } from "./forms/quartier-i/quartier-i.component";
import { QuartierJComponent } from "./forms/quartier-j/quartier-j.component";
import { QuartierKComponent } from "./forms/quartier-k/quartier-k.component";
import { MatTooltipModule } from "@angular/material/tooltip";
import { PaymentComponent } from "./forms/payment/payment.component";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { OldHomeComponent } from './pages/old-home/old-home.component';

@NgModule({
  declarations: [
    AppComponent,
    QuartierAComponent,
    QuartierBComponent,
    QuartierCComponent,
    HomeComponent,
    QuartierDComponent,
    QuartierEComponent,
    QuartierFComponent,
    QuartierGComponent,
    QuartierHComponent,
    QuartierIComponent,
    QuartierJComponent,
    QuartierKComponent,
    PaymentComponent,
    OldHomeComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
