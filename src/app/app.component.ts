import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'navagraha';

  public data;
  constructor(){
    this.data=localStorage.getItem("data");
    console.log(this.data);
    
  }
  remove(){
    localStorage.removeItem("data")
  }
  

}
