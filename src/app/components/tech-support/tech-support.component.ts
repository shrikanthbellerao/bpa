import { Component, OnInit } from "@angular/core";
import { BpaService } from "src/app/service/bpa.service";

@Component({
  selector: "app-tech-support",
  templateUrl: "./tech-support.component.html",
  styleUrls: ["./tech-support.component.css"],
})
export class TechSupportComponent implements OnInit {
  supportDetails: Object;
  constructor(private bpaService: BpaService) {}

  ngOnInit() {
    this.bpaService.fnFetchSupportDetails().subscribe(
      (res) => {
        console.log("Support Details fetched from backend", res);
        this.supportDetails = res;
      },
      (err) => console.log("Error:", err)
    );
  }
}
