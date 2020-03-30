import { Component, OnInit } from "@angular/core";

import { ThemePalette } from "@angular/material/core";
declare var $: any;

@Component({
  selector: "app-quartier-a",
  templateUrl: "./quartier-a.component.html",
  styleUrls: ["./quartier-a.component.css"]
})
export class QuartierAComponent implements OnInit {
  // variables
  type: string;
  livingArea: number;
  finishQuality: number;
  nbWashrooms: string;

  basement: boolean;
  waterView: boolean;
  indivise: boolean;
  garage: boolean;
  noisySt: boolean;
  secondPrkg: boolean;
  privateOutdoor: boolean;
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

  computeEstimate() {
    this.estimate = this.formatter.format(
      Math.round(
        this.livingArea * 3280.776 +
          this.finishQuality * 35762.6 +
          (Number(this.nbWashrooms) - 1) * 77042.11 +
          Number(this.basement) * -82823.4 +
          Number(this.waterView) * 123594 +
          Number(this.indivise) * -47426.5 +
          Number(this.garage) * 32524.31 +
          Number(this.noisySt) * -39936.4 +
          Number(this.secondPrkg) * 60206.06
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
    $("#collapseExample").collapse("show");
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight + 200);
    }, 500);

    this.computeEstimate();
    console.log("estimate", this.estimate);
    // console.log(
    //   "area",
    //   this.livingArea,
    //   "quality",
    //   this.finishQuality,
    //   "waterview",
    //   this.waterView
    // );
  }

  clearForm() {
    $("#collapseExample").collapse("hide");
    // reset all itputs
    this.type = "condo";
    this.livingArea = null;
    this.finishQuality = 5;
    this.nbWashrooms = "1";

    this.basement = false;
    this.privateOutdoor = false;
    this.waterView = false;
    this.indivise = false;
    this.garage = false;
    this.noisySt = false;
    this.secondPrkg = false;
  }
  getTotal() {
    if (this.checkForm()) this.showResult();
    else window.scrollTo(0, 0);
  }
}
