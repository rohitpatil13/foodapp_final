import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodApp';
  logout(){

    localStorage.removeItem('token'); //will remove the token to log you out

    window.alert("You have been logged out");

  }
}
