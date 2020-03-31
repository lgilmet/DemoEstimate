import { Component, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";

declare var $: any;
@Component({
  selector: "app-quartier-d",
  templateUrl: "./quartier-d.component.html",
  styleUrls: ["./quartier-d.component.css"]
})
export class QuartierDComponent implements OnInit {
  livingArea: number;
  lotArea: number;
  quality: number;
  years: number[];
  currentYear: number;
  constructionYear: number;
  type: string;
  detached: boolean;
  facePark: boolean;
  busyStreet: boolean;
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
    this.years = [];
    this.currentYear = new Date().getFullYear();
    this.constructionYear = this.currentYear;
    for (let i = 0; i < 25; i++) this.years.push(this.currentYear - i);
  }
  // LivingArea	$1,488.46 input
  // LotArea	$583.36 input
  // Age	$72.04 select
  // Type House radio
  // Quality 	$38,557.15 slider
  // Detached	$185,424.30 boolean
  // Face Parc	$66,507.37 boolean
  // Bad Street	-$121,472.00 boolean
  computeEstimate() {
    this.estimate = this.formatter.format(
      Math.round(
        this.livingArea * 1488.46 +
          this.lotArea * 583.36 +
          this.constructionYear * 72.04 +
          this.quality * 38557.15 +
          Number(this.detached) * 185424.3 +
          Number(this.facePark) * 66507.37 +
          Number(this.busyStreet) * -121472.0
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
    this.quality = 5;
    this.type = "house";
    this.detached = false;
    this.facePark = false;
    this.busyStreet = false;
  }
  getTotal() {
    if (this.checkForm()) this.showResult();
    else window.scrollTo(0, 0);
  }
}
