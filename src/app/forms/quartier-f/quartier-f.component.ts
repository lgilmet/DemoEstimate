import { Component, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
declare var $: any;
@Component({
  selector: "app-quartier-f",
  templateUrl: "./quartier-f.component.html",
  styleUrls: ["./quartier-f.component.scss"],
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
  popoverContent: string = "Unobstructed water view";
  popoverContent1: string = "Practicaly unlivable";
  popoverContent2: string = "Old carpet, Old wallpaper, Old vinyl";
  popoverContent3: string = "Parquet flooring, old melamine, basic faucets";
  popoverContent4: string =
    "Wood floor, melamine cabinets, melamine countertops";
  popoverContent5: string = "Wood floor, melamine cabinets, stone countertops";
  popoverContent6: string =
    "Wood floor, thermoformed or wood cabinets, kitchen island";
  popoverContent7: string =
    "Custom kitchen with island, open shower, high quality windows";
  popoverContent8: string =
    "Custom kitchen, high quality tiles, wall toilets, designer faucets";
  popoverContent9: string =
    "Designer's kitchen, luxury appliances, very high quality flooring and tiles";
  popoverContent10: string = "Incredible layout with incredible products";
  type: string;
  livingArea: number;
  finishQuality: number;
  nbWashrooms: string;
  nbBedrooms: string;
  quality: string;
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
      currency: "CAD",
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
  getQuality(option: number) {
    switch (option) {
      case 1:
        return 27288;
      case 2:
        return 54577.4;
      case 3:
        return 81866;
      case 4:
        return 109152;
      case 5:
        return 136440;
      case 6:
        return 163728;
      case 7:
        return 191016;
      case 8:
        return 218304;
      case 9:
        return 245592;
      case 10:
        return 272880;

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
          this.getQuality(Number(this.quality)) +
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
    this.quality = "1";
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
