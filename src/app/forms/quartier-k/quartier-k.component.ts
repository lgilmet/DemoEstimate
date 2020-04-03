import { Component, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";

declare var $: any;
@Component({
  selector: "app-quartier-k",
  templateUrl: "./quartier-k.component.html",
  styleUrls: ["./quartier-k.component.scss"]
})
export class QuartierKComponent implements OnInit {
  livingArea: number;
  lotArea: number;
  quality: string;

  type: string;
  pool: boolean;
  noyard: boolean;
  east15: boolean;
  powder: boolean;
  nsherbrooke: boolean;
  wcavendish: boolean;
  monkland: boolean;
  estimate: number;

  formatter;
  color: ThemePalette = "primary";
  constructor() {}

  ngOnInit() {
    this.clearForm();
    this.formatter = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD"
    });
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
        return 89562;
      case 2:
        return 2 * 89562;
      case 3:
        return 3 * 89562;
      case 4:
        return 4 * 89562;
      case 5:
        return 5 * 89562;
      case 6:
        return 6 * 89562;
      case 7:
        return 7 * 89562;
      case 8:
        return 8 * 89562;
      case 9:
        return 9 * 89562;
      case 10:
        return 10 * 89562;

      default:
        break;
    }
  }

  computeEstimate() {
    this.estimate = this.formatter.format(
      Math.round(
        this.livingArea * 3214.78 +
          this.lotArea * 87.34 +
          this.getQuality(Number(this.quality)) +
          Number(this.pool) * 177649 +
          Number(this.noyard) * -177146 +
          Number(this.powder) * 21615 +
          Number(this.east15) * 231647 +
          Number(this.nsherbrooke) * -174680 +
          Number(this.wcavendish) * -109931 +
          Number(this.monkland) * 141436
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
    this.pool = false;
    this.noyard = false;
    this.powder = false;
    this.east15 = false;
    this.nsherbrooke = false;
    this.wcavendish = false;
    this.monkland = false;
  }
  getTotal() {
    if (this.checkForm()) this.showResult();
    else window.scrollTo(0, 0);
  }
}
