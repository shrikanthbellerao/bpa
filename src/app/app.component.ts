import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  progressBarWidth: string = '20%';

  ngOnInit() {

    setTimeout(() => {
      this.progressBarWidth = '80%';
    }, 3000);
  }
}