import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-comment',
  templateUrl: './main-comment.component.html',
  styleUrls: ['./main-comment.component.css']
})
export class MainCommentComponent implements OnInit {

  constructor() { }

  @Input() comment;

  ngOnInit() {
  }

}
