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
  nordJarry: boolean;
  eastCC: boolean;

  alley: boolean;
  eastPapineau: boolean;
  indivise: string;
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
  leSaviezVous: any[] = [
    { icon: "rooftop", price: 44643, desc: "Terrasse sur le toit" },
    { icon: "garage", price: 52785, desc: "Garage" },
    { icon: "bathtub", price: 17606, desc: "Salle de bain" },
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
        return 48593;
      case 3:
        return 103367;

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
        return 28768;
      case 2:
        return 2 * 28768;
      case 3:
        return 3 * 28768;
      case 4:
        return 4 * 28768;
      case 5:
        return 5 * 28768;
      case 6:
        return 6 * 28768;
      case 7:
        return 7 * 28768;
      case 8:
        return 8 * 28768;
      case 9:
        return 9 * 28768;
      case 10:
        return 10 * 28768;

      default:
        break;
    }
  }
  getLevel(option: string) {
    switch (option) {
      case "above":
        return 0;
      case "half":
        return 0.5 * -49073;
      case "basement":
        return 1 * -49073;

      default:
        break;
    }
  }

  computeEstimate() {
    this.estimate = this.formatter.format(
      Math.round(
        (this.livingArea * 2867.23) / 10.764 +
          this.getQuality(Number(this.quality)) +
          Number(this.nbWashrooms) * 17806 +
          this.getBedrooms(Number(this.nbBedrooms)) +
          this.getLevel(this.level) +
          Number(this.eastPapineau) * -60151 +
          Number(this.rooftop) * 44643 +
          Number(this.terrasse) * 16490 +
          Number(this.nordJarry) * -38561 +
          Number(this.eastCC) * -47367 +
          Number(this.noisySt) * -26986 +
          Number(this.garage) * 52785
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
    this.eastPapineau = false;
    this.eastCC = false;
    this.nordJarry = false;
    this.rooftop = false;
    this.terrasse = false;

    this.indivise = "0";
    this.garage = false;
    this.noisySt = false;
  }
  getTotal() {
    this.hideError();

    if (this.checkForm()) this.showResult();
    else this.showError();
  }
}
