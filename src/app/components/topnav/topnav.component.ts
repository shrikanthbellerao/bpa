import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  user;
  adminFlag = false;
  nonadminFlag = false;
  serviceCatalogFlg = false;
  constructor(private router: Router) {}
  /* to hide the collapsed nav on clicking a nav item */
  ngOnInit() { $('.trigger').click(function(){
    $('.navbar-collapse').collapse('hide');
  });
   this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.adminFlag =
          this.router.url === "/manageRoles" ||
          this.router.url === "/appConfig" ||
          this.router.url === "/reviewRequest" ||
          this.router.url === "/myProfile";
        this.nonadminFlag = this.router.url === "/myProfile";
        this.serviceCatalogFlg =
          this.router.url === "/services" ||
          this.router.url === "/activeServices";
      }
    });
    this.user = localStorage.getItem("userdata");
  }
}
