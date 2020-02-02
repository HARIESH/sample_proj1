import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  netImage:any = "../assets/";
  title = 'sample1';
  showHead: boolean = false;
  
  ngOnInit() {
  }

  constructor(private router: Router) {
  // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        // (event['url'] == '/login') || (event['url'] == '/sign_up') || (event['url'] == '')
        if ((event['url'] == '/home/all_post') || (event['url'] == '/home/travelog') || (event['url']== '/home/travelog/pic_details')) {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });
  }
}
