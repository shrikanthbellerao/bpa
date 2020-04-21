import { Component, OnInit } from '@angular/core';
import { BpaService } from 'src/app/service/bpa.service';
@Component({
selector: 'app-faq',
templateUrl: './faq.component.html',
styleUrls: ['./faq.component.css']
})
export class FAQComponent {

faqDetails;
constructor(
private bpaservice: BpaService
) 
{ 
this.bpaservice.getFaq().subscribe((res) => {
this.faqDetails = res;
console.log('response',res);
})
}
}


