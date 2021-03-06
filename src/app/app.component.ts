import { Component } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private router: Router) {}
  loginPageFlg = false;
  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.loginPageFlg = (this.router.url === "/"  || this.router.url === "/signup"); 
      }
    });
  }
}
