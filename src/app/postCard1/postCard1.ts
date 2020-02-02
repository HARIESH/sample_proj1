import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-postCard1',
    templateUrl: './postCard1.html',
    styleUrls: ['./postCard1.css']
  })
  export class postCard1 implements OnInit {
  
    constructor() { }
  
    ngOnInit() {
    }
  
    dynamicChanging = "This is sample text";
    eventBinding = "This is for event binding";
    onClick($event: any){    
      alert("Save button is clicked!");    
    }    
  }