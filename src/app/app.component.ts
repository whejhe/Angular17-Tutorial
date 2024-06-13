import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { NavComponent } from "../components/layouts/nav/nav.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        UserComponent,
        NavComponent
    ]
})
export class AppComponent {
  title = 'angular-18-tutorial';
  city = 'Sevilla';
}
