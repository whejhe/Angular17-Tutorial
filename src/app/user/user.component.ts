import { Component } from '@angular/core';
import { GamesComponent } from "../games/games.component";

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [GamesComponent]
})
export class UserComponent {

  username = 'whejhe';
  isLoggedIn = false;
  favGames = '';

  getFavorite(gameName: string) {
    this.favGames = gameName;
  }

  greet() {
    alert('hola ' + this.username);
  }

}
