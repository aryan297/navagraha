import { Component, OnInit } from '@angular/core';
import {MainService} from "../main.service"
import {FormGroup,FormBuilder,FormControl} from "@angular/forms"
import {Router} from "@angular/router"
import {MatSnackBar} from '@angular/material/snack-bar';
import { admin } from '../policy.model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  flag=true;
  form:FormGroup;
   Values:admin[]

  constructor(private service:MainService,private fb:FormBuilder, private route:Router, private _snack:MatSnackBar) { 
    this.service.getAdmin().subscribe(data=>{
      console.log(data);
      
      this.Values= data.map(e => {
        return {
          username: e.payload.doc.data()['username'],
          password: e.payload.doc.data()['password'],
        } as admin;
      })

      console.log(this.Values);
      
    })

    this.form=this.fb.group({
      username:[''],
      password:['']  
      });
  }

  ngOnInit(): void {
    localStorage.setItem("data",'true')
  }

  login(){
    this.flag=true;
    this.service.getAdmin().subscribe(data=>{
      this.Values=data.map(e => {
        return {
          username: e.payload.doc.data()['username'],
          password: e.payload.doc.data()['password'],
        } as admin;
      })
      for(let i=0;i<this.Values.length;i++){
        
        console.log("kkkk",this.Values[i].username);
        if(this.Values[i].username===this.form.value.username && this.Values[i].password===this.form.value.password){
          this.flag=false;
          localStorage.setItem("username",this.Values[i].username)
          //console.log(this.Values[i]);
        }
      }
      if(this.flag===false){ 
       
       // console.log("log successfull");
        this._snack.open("Welcome user", "cancel", {
          duration: 2000,
        });
        return this.route.navigate(["mydata"])
      }
      if(this.flag==true){
        this._snack.open("Wrong username and password", "cancel", {
          duration: 2000,
        });
        console.log("wrong password");   
      }
    })
    console.log(this.form.value.username);
  }

  ngOnDestroy(){
    localStorage.removeItem("data");
  }

}
