import { Component, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";

declare var $: any;
@Component({
  selector: "app-quartier-i",
  templateUrl: "./quartier-i.component.html",
  styleUrls: ["./quartier-i.component.scss"],
})
export class QuartierIComponent implements OnInit {
  // variables
  //Intercept	-2378253.352
  //Année 	1275.400181
  //Sdb	21232.68844
  //Sup.habitable	1475.794652
  //Sup.terrain	276.0104132
  //Garage	18327.65699
  //Creusée	26177.63779
  //Saragay	-160062.7324
  //Nouveau-Bordeaux	-100421.1537
  //Est Papineau	-116987.776
  //Cartierville Est	-132930.7121
 // Cartierville Ouest	-92810.17244
  //Nord Chabanel	-58277.59265
 // Quality	56175.69328
 // Boulevard	-63188.62998
 // Waterfront	489087.4202
 // Split	-17977.85804
  //Park	44315.42596
 // Ahuntsic Core	104474.6879
  

  popoverContent: string = "Unobstructed water view";
  years: number[];
  currentYear: number;
  constructionYear: number;
  type: string;
  livingArea: number;
  lotArea: number;
  quality: string;
  nbWashrooms: string;
  nbGarage: string;
  
  parc: boolean;
  core: boolean;
  nordChabanel: boolean;
  newBordeaux: boolean;
  eastPapineau: boolean;

  alley: boolean;

  indivise: string;
  garage: boolean;
  waterfront: boolean;
  piscine: boolean;
  noisySt: boolean;

  split: boolean;
  estimate: string;

  formatter;
  localStr: string;

  color: ThemePalette = "primary";

  leSaviezVous: any[] = [
    { icon: "piscine", price: 26177, desc: "Piscine" },
    { icon: "garage", price: 18327, desc: "Garage" },
    { icon: "bathtub", price: 21232, desc: "Salle de bain" },
  ];

  constructor() {}

  ngOnInit() {
    this.formatter = new Intl.NumberFormat("fr-CA", {
      style: "currency",
      currency: "CAD",
    });
    this.years = [];
    this.currentYear = new Date().getFullYear();
    this.constructionYear = this.currentYear;
    for (let i = 0; i < 85; i++) this.years.push(this.currentYear - i);
  

    this.clearForm();

    this.leSaviezVous.forEach((item) => {
      item.price = this.formatter.format(item.price);
    });
  }

  

  info(event) {
    console.log(event.clientX / window.innerWidth);
  }
  getQuality(option: number) {
    switch (option) {
      case 1:
        return 56175.69;
      case 2:
        return 2 * 56175.69;
      case 3:
        return 3 * 56175.69;
      case 4:
        return 4 * 56175.69;
      case 5:
        return 5 * 56175.69;
      case 6:
        return 6 * 56175.69;
      case 7:
        return 7 * 56175.69;
      case 8:
        return 8 * 56175.69;
      case 9:
        return 10 * 56175.69;
      case 10:
        return 12 * 56175.69;

      default:
        break;
    }
  }
  
  getGarage(option: number) {
    switch (option) {
      case 0:
        return 0;
      case 1:
        return 18327;

      case 2:
        return 18327 * 2;
      default:
        break;
    }
  }

  computeEstimate() {
    this.estimate = this.formatter.format(
      Math.round(
        (this.livingArea * 1475.79) / 10.764 +
        (this.lotArea * 276.01) / 10.764 +
          this.getQuality(Number(this.quality)) +
          Number(this.nbWashrooms) * 21232.68 +
          this.getGarage(Number(this.nbGarage)) +
          Number(this.piscine) * 26197 +
          Number(this.waterfront) * 489089 +
          Number(this.core) * 104474 +
          Number(this.parc) * 44315 +
          Number(this.split) * -17977 +
          Number(this.nordChabanel) * -58277 +
          Number(this.newBordeaux) * -58277 +
          Number(this.eastPapineau) * -116988 +
          Number(this.noisySt) * -63188 +
          this.constructionYear * 1275.4 +
                    
          -2378253.35
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
    this.livingArea = null;
    this.lotArea = null;
    this.quality = "5";
    this.nbGarage = "0";
    this.nbWashrooms = "0";
    this.parc = false;;

    this.piscine = false;
    this.waterfront = false;
    this.core = false;
    this.newBordeaux = false;
    this.nordChabanel = false;
    this.eastPapineau = false;
            this.garage = false;
    this.noisySt = false;

    this.split = false;
  }
  getTotal() {
    if (this.checkForm()) this.showResult();
    else window.scrollTo(0, 0);
  }
}
