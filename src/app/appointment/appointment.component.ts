import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { MainService } from '../main.service';
import { Policy } from '../policy.model';
import {MatSnackBar} from "@angular/material/snack-bar"

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder, private mainservice:MainService,private _snack:MatSnackBar) { 
    this.form=this.fb.group({
      Name:[''],
      emailFormControl:[''],
      tel:[''],
      dateControl:[''],
      time:[''],
      AppointmentDate:[''],
      anything:['']
      });
    
  }

  ngOnInit(): void {
  }

  onSave(){
    console.log(this.form.value);
    if(this.form.value.emailFormControl=="" || this.form.value.tel==""|| this.form.value.time==""||this.form.value.AppointmentDate==""||this.form.value.dateControl==="" || this.form.value.anything===""){
      this._snack.open("Please fill all the data", "cancel", {
        duration: 5000,
      });
   
    }
    else{
    this.mainservice.createPolicy(this.form.value).then(data=>{
      this._snack.open("Appointment successdully Added, we will contact with you soon, Thank for you concern", "cancel", {
        duration: 5000,
      });
   
      this.form.reset();
    })
  }
}

}
