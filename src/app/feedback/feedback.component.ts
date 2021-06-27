import { Component, OnInit } from '@angular/core';
import {MainService} from "../main.service"
import {FormGroup,FormBuilder,FormControl} from "@angular/forms"
import {Router} from "@angular/router"
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  flag=true;
  form:FormGroup;
  Name=''
  constructor(private service:MainService,private fb:FormBuilder, private route:Router, private _snack:MatSnackBar) { 
    this.form=this.fb.group({
      Name:[''],
      Feedback:['']  
      });
  }

  ngOnInit(): void {
  }
  login(){
    this.service.createFeedback(this.form.value).then(x=>{
      
      this._snack.open("Thank you for your Feedback", "cancel", {
        duration: 2000,
      });
      this.form.reset()
    })

  }

}
