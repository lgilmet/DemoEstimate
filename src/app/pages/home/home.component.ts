import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";

declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  selectedCalculator: string = "";

  constructor(private route: ActivatedRoute, private router: Router) {
    this.getTitle();
  }

  ngOnInit() {
    this.getTitle();
    this.selectedCalculator = this.route.snapshot.firstChild.data["title"];
  }

  getTitle() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selectedCalculator = this.route.snapshot.firstChild.data["title"];
        console.log(this.selectedCalculator);
      }
    });
  }

  recordForm() {
    // get all elements from form and keep in a global object.
  }
}
