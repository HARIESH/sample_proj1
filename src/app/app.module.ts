import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './header/header.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { middle_panel } from './middle-panel/middle-panel';
import { right_panel } from './right-panel/right-panel';
import { postCard } from './postCard/postCard';
import { postCard1 } from "./postCard1/postCard1";
import { postCard2 } from "./postCard2/postCard2";
import { FormsModule } from '@angular/forms';
import { PostCard3Component } from './post-card3/post-card3.component';
import { PostCard4Component } from './post-card4/post-card4.component';
import { MainCommentComponent } from './main-comment/main-comment.component';
import { AllPostCardService } from './all-post-card.service';
import { PostCardFormComponent } from './post-card-form/post-card-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DisplayAllPostsComponent } from './display-all-posts/display-all-posts.component';
import { SecondWidgetComponent } from './second-widget/second-widget.component';
import { AboutTravelogueImageComponent } from './about-travelogue-image/about-travelogue-image.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    LeftPanelComponent,
    middle_panel,
    right_panel,
    postCard,
    postCard1,
    postCard2,
    PostCard3Component,
    PostCard4Component,
    MainCommentComponent,
    PostCardFormComponent,
    LoginPageComponent,
    SignUpPageComponent,
    HomePageComponent,
    DisplayAllPostsComponent,
    SecondWidgetComponent,
    AboutTravelogueImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AllPostCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
