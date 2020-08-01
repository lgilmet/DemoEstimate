import { Component, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";

declare var $: any;
@Component({
  selector: "app-quartier-j",
  templateUrl: "./quartier-j.component.html",
  styleUrls: ["./quartier-j.component.scss"],
})
export class QuartierJComponent implements OnInit {
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
  livingArea: number;
  quality: string;
  years: number[];
  currentYear: number;
  constructionYear: number;
  type: string;
  detached: boolean;
  waterfront: boolean;
  traintrack: boolean;
  powder: boolean;
  nbWashrooms: string;
  estimate: number;

  formatter;
  color: ThemePalette = "primary";
  constructor() {}

  ngOnInit() {
    this.clearForm();
    this.formatter = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    });
    this.years = [];
    this.currentYear = new Date().getFullYear();
    this.constructionYear = this.currentYear;
    for (let i = 0; i < 85; i++) this.years.push(this.currentYear - i);
  }
  getBathroooms(option: number) {
    switch (option) {
      case 1:
        return 0;
      case 2:
        return 39433;
      case 3:
        return 163300;

      default:
        break;
    }
  }
  // LivingArea	$1,488.46 input
  // LotArea	$583.36 input
  // Age	$72.04 select
  // Type House radio
  // Quality 	$38,557.15 slider
  // Detached	$185,424.30 boolean
  // Face Parc	$66,507.37 boolean
  // Bad Street	-$121,472.00 boolean
  getQuality(option: number) {
    switch (option) {
      case 1:
        return 33048;
      case 2:
        return 2 * 33048;
      case 3:
        return 3 * 33048;
      case 4:
        return 4 * 33048;
      case 5:
        return 5 * 33048;
      case 6:
        return 6 * 33048;
      case 7:
        return 7 * 33048;
      case 8:
        return 8 * 33048;
      case 9:
        return 9 * 33048;
      case 10:
        return 10 * 33048;

      default:
        break;
    }
  }

  computeEstimate() {
    this.estimate = this.formatter.format(
      Math.round(
        (this.livingArea * 791.66) / 10.764 +
          this.constructionYear * 75.69 +
          this.getBathroooms(Number(this.nbWashrooms)) +
          this.getQuality(Number(this.quality)) +
          Number(this.detached) * 35121 +
          Number(this.waterfront) * 245412 +
          Number(this.powder) * 18757 +
          Number(this.traintrack) * -74744
      )
    );
  }

  showResult() {
    this.computeEstimate();
    $("#collapseResult").collapse("show");
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 500);
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

  clearForm() {
    this.livingArea = null;
    this.quality = "1";
    this.type = "house";
    this.detached = false;
    this.waterfront = false;
    this.traintrack = false;
    this.powder = false;
    this.nbWashrooms = "1";
  }
  e;
  getTotal() {
    if (this.checkForm()) this.showResult();
    else window.scrollTo(0, 0);
  }
}