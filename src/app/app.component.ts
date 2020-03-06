import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    progressBarWidth = '20%';
    ngOnInit() {
        setTimeout(() => {
        }, 3000);
    }


}
