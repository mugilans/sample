import { Component, OnInit, ViewChild, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfo } from 'os';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,    
    FormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit {

// USED FOR TEMPLATE DRIVEN FORM TO ADD VIEWCHILD DECORATORE 
  @ViewChild('userdata') uf!: NgForm;
  countrylist = [
    { "countryname": "india" },
    { "countryname": "us" },
    { "countryname": "japan" }
  ];
  street = [
    { "line": "line 1" },
    { "line": "line 2" },
    { "line": "line 3" },
  ];
  onSubmit() {
    console.log(this.uf.value);
    this.uf.reset();
  }
// SET DEFAULT VALUE TO THE FORM FIELD 
  setDefaultValue() {
    this.uf.setValue({
      firstname: 'selva',
      lastname: 'kumar',
      email: 'selva@gmail.com',
      gender: 'Male',      
      isMarried: false,
      address: ({
        country: 'us',
        city: 'not',
        street: 'line 2'
      })
    });
  }
// THIS IS UPDATA PARTICULAR VALUE TO THE FORM FIELD NOT AT ALL FIELD 
  setUpdatevalue(){
    this.uf.form.patchValue({
      firstname:'selva kumar'
    })
  }
  userInfo!: FormGroup;
ngOnInit(): void {
    this.userInfo=new FormGroup({
      'firstname':new FormControl(null,Validators.required),
      'lastname': new FormControl(null,Validators.required),
      'email': new FormControl(null,Validators.email),
      'gender': new FormControl('Male'),      
      'isMarried': new FormControl(false),
      'address':new FormGroup ({
        'country': new FormControl(null),
        'city':  new FormControl(null),
        'street':  new FormControl(null)
      })
    });

    this.setDefaultValueRF();
    this.setUpdatevalueRF();
}

setDefaultValueRF() {
  this.userInfo.setValue({
    firstname: 'selva',
    lastname: 'kumar',
    email: 'selva@gmail.com',
    gender: 'Male',      
    isMarried: false,
    address: ({
      country: 'us',
      city: 'not',
      street: 'line 2'
    })
  });
}

setUpdatevalueRF(){
  this.userInfo.patchValue({
    firstname:'selva kumar'
  })
}

process(){
  console.log(this.userInfo.value);
 this.userInfo.reset();
}
}