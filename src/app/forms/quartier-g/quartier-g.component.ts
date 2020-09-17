import { Component, OnInit } from "@angular/core";

import { ThemePalette } from "@angular/material/core";
declare var $: any;
@Component({
  selector: "app-quartier-g",
  templateUrl: "./quartier-g.component.html",
  styleUrls: ["./quartier-g.component.scss"],
})
export class QuartierGComponent implements OnInit {
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
  nbGarage: string;

  eastBonsecour: boolean;
  waterview: boolean;
  mcgill: boolean;
  garage: boolean;
  viger: boolean;
  terrasse: boolean;
  themens: boolean;

  estimate: string;

  formatter;
  localStr: string;

  color: ThemePalette = "primary";

  leSaviezVous: any[] = [
    { icon: "terrace", price: 25135, desc: "Terrasse" },
    { icon: "garage", price: 57681, desc: "Garage" },
    { icon: "waterview", price: 110778, desc: "Vue sur l'eau" },
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
        return 44709;
      case 3:
        return 2 * 50884;

      default:
        break;
    }
  }
  getWashrooms(option: number) {
    switch (option) {
      case 1:
        return 0;
      case 2:
        return 48687;

      default:
        break;
    }
  }

  getGarage(option: number) {
    switch (option) {
      case 0:
        return 0;
      case 1:
        return 57881;

      case 2:
        return 122937;
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
        return 28002;
      case 2:
        return 2 * 28002;
      case 3:
        return 3 * 28002;
      case 4:
        return 4 * 28002;
      case 5:
        return 5 * 28002;
      case 6:
        return 6 * 28002;
      case 7:
        return 7 * 28002;
      case 8:
        return 8 * 28002;
      case 9:
        return 9 * 28002;
      case 10:
        return 10 * 28002;

      default:
        break;
    }
  }
  getLevel(option: string) {
    switch (option) {
      case "above":
        return 0;
      case "half":
        return 0.5 * -33464;
      case "basement":
        return 1 * -68764;
      case "dernier":
        return 1 * +10659;

      default:
        break;
    }
  }

  computeEstimate() {
    this.estimate = this.formatter.format(
      Math.round(
        (this.livingArea * 3512.14) / 10.764 +
          this.getQuality(Number(this.quality)) +
          Number(this.nbWashrooms) * 48687 +
          this.getBedrooms(Number(this.nbBedrooms)) +
          this.getGarage(Number(this.nbGarage)) +
          Number(this.mcgill) * 54943 +
          Number(this.terrasse) * -25135 +
          Number(this.themens) * -70496 +
          Number(this.viger) * -60243 +
          Number(this.eastBonsecour) * -48525 +
          Number(this.terrasse) * 25135 +
          Number(this.waterview) * 110778 +
          32165
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
    this.nbWashrooms = "0";
    this.nbGarage = "0";
    this.mcgill = false;
    this.themens = false;
    this.viger = false;
    this.eastBonsecour = false;
    this.waterview = false;

    this.terrasse = false;

    this.garage = false;
  }
  getTotal() {
    if (this.checkForm()) this.showResult();
    else window.scrollTo(0, 0);
  }
}
