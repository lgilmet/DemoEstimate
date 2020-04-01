import { Component, OnInit } from "@angular/core";

import { ThemePalette } from "@angular/material/core";
declare var $: any;
@Component({
  selector: "app-quartier-e",
  templateUrl: "./quartier-e.component.html",
  styleUrls: ["./quartier-e.component.css"]
})
export class QuartierEComponent implements OnInit {
  // variables
  // Sup.habitable	 $3,547.66
  //Chambres	 $20,636.70
  //Salles de bains	 $59,754.69
  //Stationement	 $63,093.31
  //Année	 $(45.81)
  //Vue ( Dégagée )Eau	 $95,082.42
  //Qualitée Calcul	 $32,511.92
  //Vue Centreville	 $94,886.72

  type: string;
  livingArea: number;
  finishQuality: number;
  nbWashrooms: string;
  nbBedrooms: string;

  garage: boolean;
  waterview: boolean;
  dtownview: boolean;

  estimate: string;

  formatter;
  localStr: string;

  color: ThemePalette = "primary";

  constructor() {}

  ngOnInit() {
    this.formatter = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD"
    });

    this.clearForm();
  }

  getBedrooms(option: number) {
    switch (option) {
      case 1:
        return 20636.7;
      case 2:
        return 41273.39;
      case 3:
        return 61910.09;

      default:
        break;
    }
  }
  getLevel(option: string) {
    switch (option) {
      case "above":
        return 0;
      case "half":
        return 0.5 * -54514.2;
      case "basement":
        return 1 * -54514.2;

      default:
        break;
    }
  }

  computeEstimate() {
    this.estimate = this.formatter.format(
      Math.round(
        this.livingArea * 3547.56 +
          this.finishQuality * 32511 +
          Number(this.nbWashrooms) * 20636.8 +
          this.getBedrooms(Number(this.nbBedrooms)) +
          Number(this.waterview) * 95082.8 +
          Number(this.dtownview) * 948686 +
          Number(this.garage) * 63093
      )
    );
  }

  checkForm() {
    if (this.livingArea == null) {
      document.getElementById("areaInput").classList.add("border-danger");
      return false;
    } else {
      document.getElementById("areaInput").classList.remove("border-danger");
      return true;
    }
  }

  showResult() {
    this.computeEstimate();
    $("#collapseExample").collapse("show");
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 500);
  }

  clearForm() {
    $("#collapseExample").collapse("hide");
    // reset all itputs
    this.type = "condo";
    this.livingArea = null;
    this.finishQuality = 5;
    this.nbBedrooms = "1";
    this.nbWashrooms = "1";
    this.waterview = false;
    this.dtownview = false;

    this.garage = false;
  }
  getTotal() {
    if (this.checkForm()) this.showResult();
    else window.scrollTo(0, 0);
  }
}
