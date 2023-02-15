import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  status:string = " ";
  Sid:number = 8810;
  serverName :string = "mongoDB";
  nameofuser :string = " ";
  servercode :boolean = false; 
  serverNamefun(){
    return this.serverName
  }

  name:string= "vishal"
  disable:boolean=false

  oncreateserver(){
    this.servercode =true;
    this.status= "Connected via " ;
  }

  onupdate(event:any){
  
    this.nameofuser=event.target.value;

  }
//  constructor(){
//   setTimeout(()=>{this.disable=true},10000)
//  }
}
