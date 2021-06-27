import { Component, OnInit ,ViewChild} from '@angular/core';
import {MainService} from "../main.service"
import {MatPaginator} from "@angular/material/paginator"
import {MatSort} from "@angular/material/sort"
import {MatSlideToggle} from '@angular/material/slide-toggle'
import {MatTableDataSource} from "@angular/material/table"
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router,ActivatedRoute} from "@angular/router"
import { Policy } from '../policy.model';
import { Timestamp } from 'rxjs';
import { TableUtil } from "../tabUtil";
import * as XLSX from "xlsx";
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-mydata',
  templateUrl: './mydata.component.html',
  styleUrls: ['./mydata.component.css']
})
export class MydataComponent implements OnInit {
  displayedColumns:string[]=['Name','tel','emailFormControl','dateControl','time','anything','AppointmentDate'];

  public dataSource = new MatTableDataSource<Policy>();
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild("slide") matSlideToggle:MatSlideToggle
  flag=true;
  username:string
   Values:Policy[];
   mineArray=[];

  constructor(private route:Router, private _snack:MatSnackBar, private service:MainService) { 
  this.data()
  this.username=localStorage.getItem('username')
  console.log(this.username);
  
    /*   this.Values= data.map(e => {
      return {
          Name: e.payload.doc.data()['Name'],
          Email: e.payload.doc.data()['emailFormControl'],
          Mobile: e.payload.doc.data()['tel'],
          Birth_time: e.payload.doc.data()['time'],
          Birth_date : e.payload.doc.data()['dateControl']  ,
          appointment_date:e.payload.doc.data()['AppointmentDate'],
          textarea:e.payload.doc.data()['anything'],

        } as Policy; 
      }) */

      console.log(this.Values);
      this.mineArray.push(this.Values)
      console.log(this.mineArray);
      

 

  }

  ngOnInit(): void {
  }
  exportTable() {
    TableUtil.exportTableToExcel("ExampleMaterialTable");
  }

  ngAfterViewInit():void {
    this.dataSource.paginator=this.paginator
    this.dataSource.sort=this.sort

  }

  public doFilter =(value :string)=>{
    this.dataSource.filter=value.trim().toLocaleLowerCase();
  }

  delete(id){
 /*    this.service.customerDelete(id).subscribe(data=>{
      console.log(data);
      this.data();
      
    })
    this._snack.open("successfully deleted", "cancel", {
      duration: 2000,
    }); */


  }
  data(){
    this.service.getPolicies().subscribe((res:Policy[])=>{    
      this.dataSource.data=res as Policy[]  
           
    })
  }
  logout(){
    localStorage.removeItem('username')
    return this.route.navigate(["adminData"])
  }


  ngOnDestroy(){
    localStorage.removeItem("data");
    localStorage.removeItem('username')
  }

}
