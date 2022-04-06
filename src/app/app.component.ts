import { Component } from '@angular/core';
import { TokenService } from "./token.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthenticated() {
      throw new Error("Method not implemented.");
  }
  title = 'Tour of Heroes';

  changeLan(){
    console.log("черт")
  }
}
