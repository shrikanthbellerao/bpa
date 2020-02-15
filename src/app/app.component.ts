import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  progressBarWidth: string = '20%';
 /* nav = ['tab1','tab 2', 'tab 3']*/
 nav=[{btn: "Tab 1",
   content:"Data of tab 1"},
    {btn:"Tab 2",
     content:"Data of tab 2"},
    {btn:"Tab 3",
    content:"Data of tab 3"}
   
]
data = [
  {title: 'one',
body: 'onde data is coming'},
{title: 'two',
body: 'two data is coming'}
]
  ngOnInit() {

    setTimeout(() => {
      this.progressBarWidth = '80%';
    }, 3000);
  }
}