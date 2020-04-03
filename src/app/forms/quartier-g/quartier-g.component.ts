import { Component, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
declare var $: any;
@Component({
  selector: "app-quartier-g",
  templateUrl: "./quartier-g.component.html",
  styleUrls: ["./quartier-g.component.scss"]
})
export class QuartierGComponent implements OnInit {
  // variables
  // Sup. Habitable	 $2,502.84
  // 2 bed	 $26,168.31
  // 3 bed	 $16,641.81
  // Salles d'eau	 $36,342.80
  // Garage 	 $50,505.21
  // Sous-Sol	 $(66,633.11)
  // Maison	 $105,322.42
  // Terrasse	 $33,653.45
  // Qualitée	 $28,794.49

  type: string;
  livingArea: number;
  finishQuality: number;
  nbBedrooms: string;
  quality: string;
  level: string;
  powder: boolean;

  garage: boolean;
  terrasse: boolean;
  noisySt: boolean;

  estimate: string;

  formatter;
  localStr: string;

  color: ThemePalette = "primary";

  constructor() {}

  ngOnInit() {
    this.formatter = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD"
    });

    this.clearForm();
  }

  getBedrooms(option: number) {
    switch (option) {
      case 1:
        return 0;
      case 2:
        return 26168.17;
      case 3:
        return 16641.25;

      default:
        break;
    }
  }
  getType(option: string) {
    switch (option) {
      case "condo":
        return 0;
      case "apt":
        return 105322;

      default:
        break;
    }
  }
  getQuality(option: number) {
    switch (option) {
      case 1:
        return 28794;
      case 2:
        return 2 * 28794;
      case 3:
        return 3 * 28794;
      case 4:
        return 4 * 28794;
      case 5:
        return 5 * 28794;
      case 6:
        return 6 * 28794;
      case 7:
        return 7 * 28794;
      case 8:
        return 8 * 28794;
      case 9:
        return 9 * 28794;
      case 10:
        return 10 * 28794;

      default:
        break;
    }
  }
  getLevel(option: string) {
    switch (option) {
      case "above":
        return 0;
      case "half":
        return 0.5 * -66633;
      case "basement":
        return 1 * -66633;

      default:
        break;
    }
  }

  computeEstimate() {
    this.estimate = this.formatter.format(
      Math.round(
        this.livingArea * 2502.44 +
          this.getQuality(Number(this.quality)) +
          this.getBedrooms(Number(this.nbBedrooms)) +
          this.getLevel(this.level) +
          this.getType(this.type) +
          Number(this.terrasse) * 33633 +
          Number(this.powder) * 36342.36 +
          Number(this.garage) * 50505
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
    this.level = "above";
    this.terrasse = false;
    this.garage = false;
    this.noisySt = false;
    this.powder = false;
  }
  getTotal() {
    if (this.checkForm()) this.showResult();
    else window.scrollTo(0, 0);
  }
}
