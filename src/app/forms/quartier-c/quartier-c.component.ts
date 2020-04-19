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
  type: string;
  livingArea: number;
  lotArea: number;
  quality: string;
  avgQuality: boolean;
  nbWashrooms: string;
  detached: boolean;
  level: string;
  years: number[];
  ConstructionYear: number;

  CDN: boolean;
  eastPapineau: boolean;
  eastOfRockland: boolean;
  sgl: boolean;
  yard: boolean;
  pool: boolean;
  noisySt: boolean;

  estimate: string;

  formatter;
  localStr: string;
  currentYear: number;

  color: ThemePalette = "primary";

  constructor() {}

  ngOnInit() {
    this.formatter = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    });
    this.years = [];
    this.currentYear = new Date().getFullYear();
    this.ConstructionYear = this.currentYear;
    for (let i = 0; i < 100; i++) {
      this.years.push(this.currentYear - i);
    }

    this.clearForm();
  }

  info(event) {
    console.log(event.clientX / window.innerWidth);
  }

  getBathroooms(option: number) {
    switch (option) {
      case 1:
        return 0;
      case 2:
        return 0;
      case 3:
        return 80262;

      default:
        break;
    }
  }
  getLevel(option: string) {
    switch (option) {
      case "above":
        return 0;
      case "half":
        return 0.5 * -54514.2;
      case "basement":
        return 1 * -54514.2;

      default:
        break;
    }
  }
  getQuality(option: number) {
    switch (option) {
      case 1:
        return 117439;
      case 2:
        return 2 * 117439;
      case 3:
        return 3 * 117439;
      case 4:
        return 4 * 117439;
      case 5:
        return 5 * 117439;
      case 6:
        return 6 * 117439;
      case 7:
        return 7 * 117439;
      case 8:
        return 8 * 117439;
      case 9:
        return 9 * 117439;
      case 10:
        return 10 * 117439;

      default:
        break;
    }
  }

  getYear() {
    return this.ConstructionYear * -250.409;
  }

  // -Année de construction	(2020 - 1924) * 	-250.409
  // -Size House	m2	3285.882
  // -Size Lot	m2	561.9173
  // -3 bath	0/1	66314.9
  // Detached	0/1	104862.4
  // CDN	0/1 (section)	-191459
  // Apres Rockland	0/1 (est de rockland	-168383
  // Qualitée Moyenne	0/1	119162.7
  // SGL	0/1	164738.6
  // Cour	0/1	317283.1
  // Piscine	0/1	87133.82
  // Mauvaise Rue	0/1	-188377

  computeEstimate() {
    this.estimate = this.formatter.format(
      Math.round(
        (this.livingArea * 3079) / 10.764 +
          (this.lotArea * 561.9173) / 10.764 +
          this.getQuality(Number(this.quality)) +
          this.getYear() +
          this.getBathroooms(Number(this.nbWashrooms)) +
          Number(this.detached) * 94655 +
          Number(this.CDN) * -182906 +
          Number(this.eastOfRockland) * -137253 +
          Number(this.sgl) * 162463 +
          Number(this.yard) * 336220 +
          Number(this.pool) * 92051 +
          Number(this.noisySt) * -188687
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
    this.type = "house";
    this.ConstructionYear = this.currentYear;
    this.livingArea = null;
    this.lotArea = null;
    this.quality = "1";
    this.nbWashrooms = "1";
    this.detached = false;
    this.CDN = false;
    this.yard = false;
    this.pool = false;
    this.sgl = false;
    this.eastOfRockland = false;
    this.noisySt = false;
  }
  getTotal() {
    if (this.checkForm()) this.showResult();
    else window.scrollTo(0, 0);
  }
}
