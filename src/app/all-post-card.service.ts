import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllPostCardService {

  constructor() { }

  card_details1 = [
    {
      "id": "post_card",
      "type": 1,
      "profile_picture": "assets/images/author-main1.jpg",
      "user_name": "James Cameroon",
      "last_visited": "2019-11-07T23:28:56",
      "description": "What is the best thing to do when you have a hole in a boat and water is leaking inside? Make another hole to drain the water.",
      "media_file": "",
      "likes": {
        "total_likes_count": 20,
        "liked_by": [
          "assets/images/author-main1.jpg",
          "assets/images/man-1.png",
          "assets/images/man-2.png"
        ]
      },
      "main_comment": [
        {
          "profile_image": "assets/images/man-2.png",
          "user_name": "Smith",
          "likes_count": 30,
          "description": "What is the best thing to do when you have a hole in a boat and water is leaking inside? Make another hole to drain the water.",
          "sub_comment": [
            {
              "user_image": "assets/images/man.png",
              "name": "Bran",
              "description": "It is a good question.",
            },
            {
              "user_image": "assets/images/girl-1.png",
              "name": "Daenarys Targaryen",
              "description": "I am the Mother of Dragons.",
            }
          ]
        },
        {
          "profile_image": "assets/images/boy-1.png",
          "user_name": "Jon",
          "likes_count": 30,
          "description": "What’s your favorite classic horror film?",
          "sub_comment": [
            {
              "user_image": "assets/images/man-2.png",
              "name": "Bran",
              "description": "Dracula",
            }
          ]
        }
      ]
    },
    {
      "id": "post_card",
      "type": 2,
      "profile_picture": "assets/images/man.png",
      "user_name": "John",
      "last_visited": "2019-11-07T23:28:56",
      "description": "Game of Thrones...!!!!",
      "media_file": "assets/images/got.gif",
      "likes": "",
      "main_comment": []
    }
  ]

  createNewPost(id: string, type: number, profile_picture: string, user_name: string, last_visited: string, description: string, media_file: string, likes: any, main_comment: any){
    this.card_details1.push({id: id, type: type, profile_picture: profile_picture, user_name: user_name, last_visited: last_visited, description: description, media_file: media_file, likes: likes, main_comment: main_comment});
  }
}
