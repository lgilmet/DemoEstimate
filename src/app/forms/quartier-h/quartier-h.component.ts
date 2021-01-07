import { Component, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";

declare var $: any;
@Component({
  selector: "app-quartier-h",
  templateUrl: "./quartier-h.component.html",
  styleUrls: ["./quartier-h.component.scss"],
})
export class QuartierHComponent implements OnInit {
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
  studio: boolean;
  sun: boolean;

  alley: boolean;

  indivise: string;
  garage: boolean;
  rooftop: boolean;
  terrasse: boolean;
  noisySt: boolean;

  loft: boolean;
  estimate: string;

  formatter;
  localStr: string;

  color: ThemePalette = "primary";

  leSaviezVous: any[] = [
    { icon: "rooftop", price: 75105, desc: "Terrasse sur le toit" },
    { icon: "garage", price: 33327, desc: "Garage" },
    { icon: "bathtub", price: 40454, desc: "Salle de bain" },
  ];

  constructor() {}

  ngOnInit() {
    this.formatter = new Intl.NumberFormat("fr-CA", {
      style: "currency",
      currency: "CAD",
    });

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
        return 17499;
      case 3:
        return 2 * 40280;

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
        return 28873;
      case 2:
        return 2 * 28873;
      case 3:
        return 3 * 28873;
      case 4:
        return 4 * 28873;
      case 5:
        return 5 * 28873;
      case 6:
        return 6 * 28873;
      case 7:
        return 7 * 28873;
      case 8:
        return 8 * 28873;
      case 9:
        return 9 * 28873;
      case 10:
        return 10 * 28873;

      default:
        break;
    }
  }
  getLevel(option: string) {
    switch (option) {
      case "above":
        return 0;
      case "half":
        return 1 * -13793;

      case "basement":
        return 1 * -27443;

      default:
        break;
    }
  }

  computeEstimate() {
    this.estimate = this.formatter.format(
      Math.round(
        (this.livingArea * 1993) / 10.764 +
          this.getQuality(Number(this.quality)) +
          Number(this.nbWashrooms) * 40225 +
          this.getBedrooms(Number(this.nbBedrooms)) +
          this.getLevel(this.level) +
          Number(this.rooftop) * 74592 +
          Number(this.terrasse) * 28059 +
          Number(this.alley) * 12752 +
          Number(this.noisySt) * -25742 +
          Number(this.indivise) * -41777 +
          Number(this.garage) * 33111 +
          Number(this.loft) * 36224 +
          Number(this.studio) * -14112 +
          Number(this.sun) * 11260 +
          4369
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
    this.nbWashrooms = "0";
    this.level = "above";

    this.rooftop = false;
    this.terrasse = false;
    this.studio = false;
    this.sun = false;

    this.alley = false;
    this.indivise = "0";
    this.garage = false;
    this.noisySt = false;

    this.loft = false;
  }
  getTotal() {
    this.hideError();

    if (this.checkForm()) this.showResult();
    else this.showError();
  }
}
