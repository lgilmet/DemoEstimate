import { Component, OnInit } from "@angular/core";

import { ThemePalette } from "@angular/material/core";
declare var $: any;

@Component({
  selector: "app-quartier-a",
  templateUrl: "./quartier-a.component.html",
  styleUrls: ["./quartier-a.component.scss"],
})
export class QuartierAComponent implements OnInit {
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
  nbPowder: boolean;
  level: string;

  alley: boolean;
  eastPapineau: boolean;
  westStLau: boolean;
  mcgill: boolean;
  laurier: boolean;
  indivise: string;
  garage: boolean;
  rooftop: boolean;
  terrasse: boolean;
  railway: boolean;
  noisySt: boolean;
  backyard: boolean;
  park: boolean;

  heritageBldg: boolean;
  loft: boolean;
  estimate: string;

  formatter;
  localStr: string;

  color: ThemePalette = "primary";

  leSaviezVous: any[] = [
    { icon: "rooftop", price: 53688, desc: "Terrasse sur le toit" },
    { icon: "garage", price: 31378, desc: "Garage" },
    { icon: "bathtub", price: 18051, desc: "Salle de bain" },
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
        return 30357;
      case 3:
        return 2 * 58926;

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
        return 30534;
      case 2:
        return 2 * 30534;
      case 3:
        return 3 * 30534;
      case 4:
        return 4 * 30534;
      case 5:
        return 5 * 30534;
      case 6:
        return 6 * 30534;
      case 7:
        return 7 * 30534;
      case 8:
        return 8 * 30534;
      case 9:
        return 9 * 30534;
      case 10:
        return 10 * 30534;

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
        (this.livingArea * 3082.23) / 10.764 +
          this.getQuality(Number(this.quality)) +
          Number(this.nbWashrooms) * 18065 +
          this.getBedrooms(Number(this.nbBedrooms)) +
          this.getLevel(this.level) +
          Number(this.eastPapineau) * -47891.8 +
          Number(this.westStLau) * -15301.8 +
          Number(this.mcgill) * +61642.8 +
          Number(this.laurier) * -21852.8 +
          Number(this.rooftop) * 53688 +
          Number(this.terrasse) * 18438 +
          Number(this.railway) * -49328 +
          Number(this.alley) * 24336.77 +
          Number(this.heritageBldg) * 51801 +
          Number(this.noisySt) * -24654.7 +
          Number(this.nbPowder) * 10675 +
          Number(this.indivise) * -35141 +
          Number(this.garage) * 31378 +
          Number(this.backyard) * 42838 +
          Number(this.park) * 26176 +
          Number(this.loft) * 49680 +
          42625.0973504862
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
    this.quality = "5";
    this.nbBedrooms = "1";
    this.nbWashrooms = "0";
    this.level = "above";
    this.eastPapineau = false;
    this.westStLau = false;
    this.mcgill = false;
    this.laurier = false;
    this.rooftop = false;
    this.terrasse = false;
    this.railway = false;
    this.alley = false;
    this.indivise = "0";
    this.garage = false;
    this.noisySt = false;
    this.heritageBldg = false;
    this.nbPowder = false;
    this.backyard = false;
    this.park = false;
    this.loft = false;
  }
  getTotal() {
    if (this.checkForm()) this.showResult();
    else window.scrollTo(0, 0);
  }
}
