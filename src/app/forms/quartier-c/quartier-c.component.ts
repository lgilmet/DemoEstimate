import { Component, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
declare var $: any;

@Component({
  selector: "app-quartier-c",
  templateUrl: "./quartier-c.component.html",
  styleUrls: ["./quartier-c.component.scss"],
})
export class QuartierCComponent implements OnInit {
  // variables
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
  popoverContent12: string =
    "A terrace is a balcony that is over 5 foot wide, and at least 35 sq/foot";

  type: string;
  livingArea: number;
  quality: string;
  nbWashrooms: string;
  nbBedrooms: string;
  level: string;

  alley: boolean;
  house: boolean;
  eastPapineau: boolean;
  indivise: string;
  garage: boolean;
  rooftop: boolean;
  terrasse: boolean;

  noisySt: boolean;

  estimate: string;

  formatter;
  localStr: string;

  color: ThemePalette = "primary";

  leSaviezVous: any[] = [
    { icon: "townhouse", price: 126163, desc: "Maison de Ville" },
    { icon: "rooftop", price: 106627, desc: "Terrasse sur le toit" },
    { icon: "garage", price: 52992, desc: "Garage" },
  ];

  constructor() {}

  ngOnInit() {
    this.formatter = new Intl.NumberFormat("fr-CA", {
      style: "currency",
      currency: "CAD",
    });

    console.log(this.leSaviezVous);

    this.clearForm();

    this.leSaviezVous.forEach((item) => {
      item.price = this.formatter.format(item.price);
    });
  }

  getBedrooms(option: number) {
    switch (option) {
      case 1:
        return 0;
      case 2:
        return 18424;
      case 3:
        return 10081;

      default:
        break;
    }
  }

  info(event) {
    console.log(event.clientX / window.innerWidth);
  }
  getQuality(option: number) {
    switch (option) {
      case 1:
        return 28221;
      case 2:
        return 2 * 28221;
      case 3:
        return 3 * 28221;
      case 4:
        return 4 * 28221;
      case 5:
        return 5 * 28221;
      case 6:
        return 6 * 28221;
      case 7:
        return 7 * 28221;
      case 8:
        return 8 * 28221;
      case 9:
        return 9 * 28221;
      case 10:
        return 10 * 28221;

      default:
        break;
    }
  }
  getLevel(option: string) {
    switch (option) {
      case "above":
        return 0;
      case "half":
        return 0.5 * -33168;
      case "basement":
        return 1 * -66168;

      default:
        break;
    }
  }

  computeEstimate() {
    this.estimate = this.formatter.format(
      Math.round(
        (this.livingArea * 2948.23) / 10.764 -
          36381 +
          this.getQuality(Number(this.quality)) +
          this.getBedrooms(Number(this.nbBedrooms)) +
          this.getLevel(this.level) +
          Number(this.eastPapineau) * -25821 +
          Number(this.rooftop) * 106943 +
          Number(this.terrasse) * 39414 +
          Number(this.house) * 126528 +
          Number(this.noisySt) * -25120.7 +
          Number(this.indivise) * -14676 +
          Number(this.garage) * 53399.52 +
          3064
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

  showError() {
    $("#errorMessage").collapse("show");
  }

  hideError() {
    $("#errorMessage").collapse("hide");
  }

  clearForm() {
    $("#collapseExample").collapse("hide");
    // reset all itputs
    this.type = "condo";
    this.livingArea = null;
    this.quality = "5";
    this.nbBedrooms = "1";
    this.nbWashrooms = "1";
    this.level = "above";
    this.eastPapineau = false;
    this.rooftop = false;
    this.terrasse = false;
    this.alley = false;
    this.indivise = "0";
    this.garage = false;
    this.noisySt = false;
    this.house = false;
  }
  getTotal() {
    this.hideError();

    if (this.checkForm()) this.showResult();
    else this.showError();
  }
}
