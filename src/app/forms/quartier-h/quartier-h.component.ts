import { Component, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";

declare var $: any;
@Component({
  selector: "app-quartier-h",
  templateUrl: "./quartier-h.component.html",
  styleUrls: ["./quartier-h.component.scss"],
})
export class QuartierHComponent implements OnInit {
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
  nbWashrooms: string;
  type: string;
  detached: boolean;
  highway: boolean;
  waterfront: boolean;
  nbBedrooms: string;
  garage: boolean;
  estimate: number;
  level: string;

  formatter;
  color: ThemePalette = "primary";
  constructor() {}

  ngOnInit() {
    this.clearForm();
    this.formatter = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    });
  }

  // LivingArea	 $1,683.87
  //  Lot Area	 $206.01
  //  3 bath	 $61,740.04
  //  Highway	 $(69,084.67)
  // Waterfront	 $591,890.78
  //  Quality	 $49,216.07
  //  Dorval	 $(55,010.90)
  //  Saint-Pierre	 $(82,916.52)
  //  Detached	 $35,672.35

  getQuality(option: number) {
    switch (option) {
      case 1:
        return 49240;
      case 2:
        return 2 * 49240;
      case 3:
        return 3 * 49240;
      case 4:
        return 4 * 49240;
      case 5:
        return 5 * 49240;
      case 6:
        return 6 * 49240;
      case 7:
        return 7 * 49240;
      case 8:
        return 8 * 49240;
      case 9:
        return 9 * 49240;
      case 10:
        return 10 * 49240;

      default:
        break;
    }
  }
  getBathroooms(option: number) {
    switch (option) {
      case 1:
        return 0;
      case 2:
        return 0;
      case 3:
        return 66758;

      default:
        break;
    }
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

  computeEstimate() {
    this.estimate = this.formatter.format(
      Math.round(
        (this.livingArea * 1626.57) / 10.764 -
          55010 +
          (this.lotArea * 202.1) / 10.764 +
          this.getBathroooms(Number(this.nbWashrooms)) +
          this.getQuality(Number(this.quality)) +
          Number(this.detached) * 36545 +
          Number(this.garage) * 19983 +
          Number(this.highway) * -72645 +
          Number(this.waterfront) * 604258
      )
    );
  }

  showResult() {
    this.computeEstimate();
    $("#collapseResult").collapse("show");
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
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
    this.level = "above";
    this.livingArea = null;
    this.lotArea = null;
    this.quality = "1";
    this.type = "condo";
    this.detached = false;
    this.highway = false;
    this.nbWashrooms = "1";
    this.waterfront = false;
    this.nbBedrooms = "1";
  }
  getTotal() {
    if (this.checkForm()) this.showResult();
    else window.scrollTo(0, 0);
  }
}
