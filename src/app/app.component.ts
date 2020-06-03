import { Component, OnInit } from "@angular/core";
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
  loggedIn: boolean = false;
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

  ngOnInit(){
    console.log('ngoninit')
    let pageUpLink = document.querySelectorAll('.nav-link, .navbar-brand, .footer-link')
    console.log(pageUpLink)
    pageUpLink.forEach(link => {
      console.log('convert links')
      link.addEventListener('click', function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        console.log('tring to scroll up')
      })
    });
  }

  signIn() {
    if (this.inputPassword == "secret") {
      this.loggedIn = true;
      this.ngOnInit()
    }
  }
}
