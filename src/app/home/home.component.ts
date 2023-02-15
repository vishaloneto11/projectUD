import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dbName:string = "";
  db:boolean= false

  showing(){
    this.db=true
    
  }
}
