import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { DisplayAllPostsComponent } from './display-all-posts/display-all-posts.component';
import { SecondWidgetComponent } from './second-widget/second-widget.component';
import { AboutTravelogueImageComponent } from './about-travelogue-image/about-travelogue-image.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent, children: [
    { path: 'all_post', component: DisplayAllPostsComponent},
    { path: 'travelog', component: SecondWidgetComponent, children: [
      { path: 'pic_details', component: AboutTravelogueImageComponent}
    ]}
  ] },
  // { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'sign_up', component: SignUpPageComponent }
  // const routes: Routes = [
  //   { path: '', component: HomePageComponent },
  //   { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
