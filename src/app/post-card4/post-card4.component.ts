import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-card4',
  templateUrl: './post-card4.component.html',
  styleUrls: ['./post-card4.component.css']
})
export class PostCard4Component implements OnInit {

  constructor() { }

  @Input() card_details;
  
  ngOnInit() {
  }

}
