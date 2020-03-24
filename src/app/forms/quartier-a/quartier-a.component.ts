import { Component, OnInit } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-quartier-a",
  templateUrl: "./quartier-a.component.html",
  styleUrls: ["./quartier-a.component.css"]
})
export class QuartierAComponent implements OnInit {
  // variables
  basement: false;
  waterView: false;

  constructor() {}

  ngOnInit() {}

  showResult() {
    $("#collapseExample").collapse("show");
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight + 200);
    }, 500);
  }

  clearForm() {
    $("#collapseExample").collapse("hide");
    // reset all itputs
    this.basement = false;
  }
  getTotal() {
    console.log(this.basement);
    this.showResult();
  }
}
