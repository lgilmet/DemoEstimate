import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";

declare var gtag;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "DemoForms";
  loggedIn: boolean = true;
  inputPassword: string = "";

  constructor(router: Router) {
    const navEndEvents = router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag("config", "UA-167474754-1", {
        page_path: event.urlAfterRedirects,
      });
    });
  }

  signIn() {
    console.log("trying to login", this.inputPassword);
    if (this.inputPassword == "secret") {
      this.loggedIn = true;
      console.log("login");
    }
  }
}
