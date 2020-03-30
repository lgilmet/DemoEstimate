import { Component, OnInit } from "@angular/core";

import { ThemePalette } from "@angular/material/core";
declare var $: any;

@Component({
  selector: "app-quartier-b",
  templateUrl: "./quartier-b.component.html",
  styleUrls: ["./quartier-b.component.css"]
})
export class QuartierBComponent implements OnInit {
  // variables
  type: string;
  livingArea: number;
  finishQuality: number;
  nbWashrooms: string;
  nbBedrooms: string;
  level: string;

  alley: boolean;
  eastPapineau: boolean;
  indivise: boolean;
  garage: boolean;
  rooftop: boolean;
  terrasse: boolean;
  railway: boolean;
  noisySt: boolean;
  secondPrkg: boolean;

  heritageBldg: boolean;
  luxuryBldg: boolean;
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
        return 0;
      case 2:
        return 29424.64;
      case 3:
        return 91869.05;

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
        this.livingArea * 2442.839 +
          this.finishQuality * 35762.6 +
          Number(this.nbWashrooms) * 28310.99 +
          this.getBedrooms(Number(this.nbBedrooms)) +
          this.getLevel(this.level) +
          Number(this.eastPapineau) * -60745.8 +
          Number(this.rooftop) * 70224.33 +
          Number(this.terrasse) * 40733.43 +
          Number(this.railway) * -97407.3 +
          Number(this.alley) * 20484.77 +
          Number(this.heritageBldg) * 80020.64 +
          Number(this.luxuryBldg) * 61656.98 +
          Number(this.indivise) * -32567.97 +
          Number(this.garage) * 17690.52
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
    this.livingArea = 50;
    this.finishQuality = 5;
    this.nbBedrooms = "1";
    this.nbWashrooms = "1";
    this.level = "above";
    this.eastPapineau = false;
    this.rooftop = false;
    this.terrasse = false;
    this.railway = false;
    this.alley = false;
    this.indivise = false;
    this.garage = false;
    this.noisySt = false;
    this.heritageBldg = false;
    this.luxuryBldg = false;
  }
  getTotal() {
    if (this.checkForm()) this.showResult();
    else window.scrollTo(0, 0);
  }
}
