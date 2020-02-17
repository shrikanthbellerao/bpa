import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  
  newForms = {};
  formSteps=[{
    formName:"form1",
    inputItems:[
      {
        type:"text",
        placeholder:"First Name",
        fcname:"fname"
      },
      {
        type:"text",
        placeholder:"Last Name",
        fcname:"lname"
      }
    ]
    
    }
    ,{
      formName:"form2",
    inputItems:[
      {
        type:"text",
        placeholder:"Gender",
        fcname:"gender"
      },
      {
        type:"number",
        placeholder:"Phone Number",
        fcname:"phone"
      }
    ]
    
    },
    {
      formName:"form3",
    inputItems:[
      {
        type:"email",
        placeholder:"Email",
        fcname:"email"
      },
      {
        type:"password",
        placeholder:"Password",
        fcname:"password"
      }
    ]
    
    }
  ]
  formLength:number=this.formSteps.length;
  constructor(private formBuilder: FormBuilder) { 
    
 
   // this.form1 = this.formBuilder.group({
    //   fname: '',
    //   lname: ''
      
    // });
  
  }
  ngOnInit() {
this.generateForms();
}
generateForms() {
   this.formSteps.forEach((res) =>  {
    let newRecord = {}
      res.inputItems.forEach(element => {
        newRecord[element.fcname] = ''
      });
      this.newForms[res.formName] = this.formBuilder.group(newRecord);
  } );
}
getForm(formName) {
  console.log('control', this.newForms)
   return this.newForms[formName]
}



}