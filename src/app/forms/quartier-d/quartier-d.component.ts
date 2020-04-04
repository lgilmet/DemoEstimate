import { Component, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";

declare var $: any;
@Component({
  selector: "app-quartier-d",
  templateUrl: "./quartier-d.component.html",
  styleUrls: ["./quartier-d.component.scss"],
})
export class QuartierDComponent implements OnInit {
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
  lotArea: number;
  quality: string;
  years: number[];
  currentYear: number;
  constructionYear: number;
  type: string;
  detached: boolean;
  facePark: boolean;
  busyStreet: boolean;
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
    for (let i = 0; i < 25; i++) this.years.push(this.currentYear - i);
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
        return 38557;
      case 2:
        return 2 * 38557;
      case 3:
        return 3 * 38557;
      case 4:
        return 4 * 38557;
      case 5:
        return 5 * 38557;
      case 6:
        return 6 * 38557;
      case 7:
        return 7 * 38557;
      case 8:
        return 8 * 38557;
      case 9:
        return 9 * 38557;
      case 10:
        return 10 * 38557;

      default:
        break;
    }
  }

  computeEstimate() {
    this.estimate = this.formatter.format(
      Math.round(
        this.livingArea * 1488.46 +
          this.lotArea * 583.36 +
          this.constructionYear * 72.04 +
          this.getQuality(Number(this.quality)) +
          Number(this.detached) * 185424.3 +
          Number(this.facePark) * 66507.37 +
          Number(this.busyStreet) * -121472.0
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
    this.lotArea = null;
    this.quality = "1";
    this.type = "house";
    this.detached = false;
    this.facePark = false;
    this.busyStreet = false;
  }
  getTotal() {
    if (this.checkForm()) this.showResult();
    else window.scrollTo(0, 0);
  }
}
