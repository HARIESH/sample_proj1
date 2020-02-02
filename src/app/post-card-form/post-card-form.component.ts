import { Component, OnInit } from '@angular/core';
import { AllPostCardService } from '../all-post-card.service';

@Component({
  selector: 'app-post-card-form',
  templateUrl: './post-card-form.component.html',
  styleUrls: ['./post-card-form.component.css']
})
export class PostCardFormComponent implements OnInit {

  constructor(private allPostCardService: AllPostCardService) { }

  selectedLevel: 0;
  ngOnInit() {
    console.log(this.selectedLevel);
  }

  selectedCardType (event: any) {
    this.selectedLevel = event.target.value;
  }

  newPost(id: string, type: number, profile_picture: string, user_name: string, last_visited: string, description: string, media_file: string, likes: any, main_comment: any) {
    this.allPostCardService.createNewPost(id, type, profile_picture, user_name, last_visited, description, media_file, likes, main_comment);
  }
}
