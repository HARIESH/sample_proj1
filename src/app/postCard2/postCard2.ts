import { Component, OnInit} from "@angular/core";

@Component ({
    selector: 'app-postCard2',
    templateUrl: './postCard2.html',
    styleUrls: ['./postCard2.css']
})

export class postCard2 implements OnInit {
  
    constructor() { }
  
    ngOnInit() {
    }
  
    inputVariable = "This is input box content";

    name = 'Peter';

    updateName() {
        this.name = 'John';
    }
  }