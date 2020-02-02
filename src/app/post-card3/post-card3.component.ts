import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-card3',
  templateUrl: './post-card3.component.html',
  styleUrls: ['./post-card3.component.css']
})
export class PostCard3Component implements OnInit {

  constructor() { }

  @Input() card_details;

  ngOnInit() {
  }

}
