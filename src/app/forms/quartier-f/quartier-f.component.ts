import { Component, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
declare var $: any;
@Component({
  selector: "app-quartier-f",
  templateUrl: "./quartier-f.component.html",
  styleUrls: ["./quartier-f.component.css"]
})
export class QuartierFComponent implements OnInit {
  // variables
  //Habitable 	 $1,977.44
  //SDB 	 $43,077.18
  //2 bed 	 $16,562.87
  //3 Bed 	 $39,848.30
  //Indivise 	 $(39,962.50)
  //Garage  	 $34,708.66
  //Sous-Sol 	 $(28,403.76)
  //Qualitée 	 $27,288.70
  //Rooftop 	 $76,231.57
  //Terrasse 	 $28,288.91
  //Industrial loft 	 $31,621.57
  //Boulevard 	 $(19,815.48)
  //Allée 	 $13,267.94
  //0 Chambres 	 $(15,834.70)
  //Orientation (1 vers sud 0 vers nord) 	 $13,555.71

  type: string;
  livingArea: number;
  finishQuality: number;
  nbWashrooms: string;
  nbBedrooms: string;
  level: string;

  alley: boolean;
  orientation: boolean;
  indivise: boolean;
  garage: boolean;
  rooftop: boolean;
  terrasse: boolean;
  industrial: boolean;
  noisySt: boolean;
  nobed: boolean;

  secondGarage: boolean;
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
        return 16562.17;
      case 3:
        return 39848.3;

      default:
        break;
    }
  }
  getLevel(option: string) {
    switch (option) {
      case "above":
        return 0;
      case "half":
        return 0.5 * -28403.76;
      case "basement":
        return 1 * -28403.76;

      default:
        break;
    }
  }

  computeEstimate() {
    this.estimate = this.formatter.format(
      Math.round(
        this.livingArea * 1977.44 +
          this.finishQuality * 27288.66 +
          Number(this.nbWashrooms) * 43077.18 +
          this.getBedrooms(Number(this.nbBedrooms)) +
          this.getLevel(this.level) +
          Number(this.orientation) * 13555.71 +
          Number(this.rooftop) * 76231.77 +
          Number(this.terrasse) * 28288.91 +
          Number(this.industrial) * 31621.57 +
          Number(this.alley) * 13267.54 +
          Number(this.noisySt) * -19815.8 +
          Number(this.indivise) * -39962.5 +
          Number(this.garage) * 34708.32
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
    this.level = "above";
    this.orientation = false;
    this.rooftop = false;
    this.terrasse = false;
    this.industrial = false;
    this.alley = false;
    this.indivise = false;
    this.garage = false;
    this.noisySt = false;
  }
  getTotal() {
    if (this.checkForm()) this.showResult();
    else window.scrollTo(0, 0);
  }
}
