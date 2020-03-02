<<<<<<< HEAD
import { Component } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
=======
import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

>>>>>>> e0150fdc2e90a00665a305641d8079c396cf2c29
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
<<<<<<< HEAD
  constructor(private router: Router) {}
  flag = false;
  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.flag = this.router.url === "/";
      }
    });
  }
=======
constructor(private router:Router) {}
flag = false;
    ngOnInit() {
        this.router.events.subscribe(
            (event: any) => {
              if (event instanceof NavigationEnd) {
                this.flag = (this.router.url === '/'); 
              }
            }
          );
    }


>>>>>>> e0150fdc2e90a00665a305641d8079c396cf2c29
}
