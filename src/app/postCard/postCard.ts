import { Component, OnInit, Input } from '@angular/core';
import { AllPostCardService } from '../all-post-card.service';

@Component({
    selector: 'app-postCard',
    templateUrl: './postCard.html',
    styleUrls: ['./postCard.css']
})
export class postCard implements OnInit {

    public card_details1 = [];
    
    constructor( private _postCardService: AllPostCardService) { }

    ngOnInit() {
        this.card_details1 = this._postCardService.card_details1;
    }

    

    example1 = "Hurrah !"

    // card_details1 = [
    //     // {
    //     //     "id": "post_card",
    //     //     "profile_picture": "assets/images/author-main1.jpg",
    //     //     "user_name": "Will Smith",
    //     //     "last_visited": "2019-11-07T23:28:56",
    //     //     "description": "What is the best thing to do when you have a hole in a boat and water is leaking inside? Make another hole to drain the water.",
    //     //     "likes": {
    //     //         "total_likes_count": 20,
    //     //         "liked_by": [
    //     //             "assets/images/author-main1.jpg",
    //     //             "assets/images/man-1.png",
    //     //             "assets/images/man-2.png"
    //     //         ]
    //     //     },
    //     //     "comments": 20
    //     // },
    //     // {
    //     //     "id": "post_card",
    //     //     "profile_picture": "assets/images/man-1.png",
    //     //     "user_name": "Jon Snow",
    //     //     "last_visited": "2019-11-07T23:28:56",
    //     //     "description": "Jon knows nothing, only the mother of DRAGONS",
    //     //     "likes": {
    //     //         "total_likes_count": 20,
    //     //         "liked_by": [
    //     //             "assets/images/author-main1.jpg",
    //     //             "assets/images/man-1.png",
    //     //             "assets/images/man-2.png"
    //     //         ]
    //     //     },
    //     //     "comments": 20
    //     // },
    //     {
    //         "id": "post_card",
    //         "type": 1,
    //         "profile_picture": "assets/images/author-main1.jpg",
    //         "user_name": "James Cameroon",
    //         "last_visited": "2019-11-07T23:28:56",
    //         "description": "What is the best thing to do when you have a hole in a boat and water is leaking inside? Make another hole to drain the water.",
    //         "likes": {
    //             "total_likes_count": 20,
    //             "liked_by": [
    //                 "assets/images/author-main1.jpg",
    //                 "assets/images/man-1.png",
    //                 "assets/images/man-2.png"
    //             ]
    //         },
    //         "main_comment": [
    //             {
    //                 "profile_image": "assets/images/man-2.png",
    //                 "user_name": "Smith",
    //                 "likes_count": 30,
    //                 "description": "What is the best thing to do when you have a hole in a boat and water is leaking inside? Make another hole to drain the water.",
    //                 "sub_comment": [
    //                     {
    //                         "user_image": "assets/images/man.png",
    //                         "name": "Bran",
    //                         "description": "It is a good question.",
    //                     },
    //                     {
    //                         "user_image": "assets/images/girl-1.png",
    //                         "name": "Daenarys Targaryen",
    //                         "description": "I am the Mother of Dragons.",
    //                     }
    //                 ]
    //             },
    //             {
    //                 "profile_image": "assets/images/boy-1.png",
    //                 "user_name": "Jon",
    //                 "likes_count": 30,
    //                 "description": "What’s your favorite classic horror film?",
    //                 "sub_comment": [
    //                     {
    //                         "user_image": "assets/images/man-2.png",
    //                         "name": "Bran",
    //                         "description": "Dracula",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": "post_card",
    //         "type": 2,
    //         "profile_picture": "assets/images/man.png",
    //         "user_name": "John",
    //         "last_visited": "2019-11-07T23:28:56",
    //         "description": "Game of Thrones...!!!!",
    //         "media_file": "assets/images/got.gif",
    //         "likes": "",
    //         "main_comment": []
    //     }
    // ]
}