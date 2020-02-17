import { Component, OnInit ,ChangeDetectorRef, Input} from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { CdkStepper } from '@angular/cdk/stepper';


@Component({
  selector: 'app-cstepper',
  templateUrl: './cstepper.component.html',
  styleUrls: ['./cstepper.component.css'],
  providers: [{ provide: CdkStepper, useExisting: CstepperComponent}]
})
export class CstepperComponent extends CdkStepper implements OnInit  {
  constructor(dir: Directionality, changeDetectorRef: ChangeDetectorRef) {
    super(dir, changeDetectorRef);
  }
  
 
 @Input()
 formLength:number;
 needNext:boolean = true;
 needPrev:boolean = false;
  onClick(index: number): void {
    this.selectedIndex = index;
    if(index!=0)
      this.needPrev=true;
    else
      this.needPrev=false;
    if(this.selectedIndex==(this.formLength-1) || this.formLength==1)
      this.needNext=false;
    else
      this.needNext=true;
      
  }
  nextClick(){
    if(this.selectedIndex!=0)
      this.needPrev=true;
    else
      this.needPrev=false;
    if(this.selectedIndex==(this.formLength-1) || this.formLength==1)
      this.needNext=false;
    else
      this.needNext=true;
  }

  prevClick(){
    if(this.selectedIndex!=0)
      this.needPrev=true;
    else
      this.needPrev=false;
      
    if(this.selectedIndex==(this.formLength-1) || this.formLength==1)
      this.needNext=false;
    else
      this.needNext=true;
  }


 
  
  ngOnInit() {
    if(this.formLength==1)
    {
      this.needNext=false;
    }
  }


}