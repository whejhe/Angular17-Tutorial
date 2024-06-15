import { Component } from '@angular/core';
import { GitGithubComponent } from "./git-github/git-github.component";
import { FirebaseComponent } from "./firebase/firebase.component";

@Component({
    selector: 'app-guias',
    standalone: true,
    templateUrl: './guias.component.html',
    styleUrl: './guias.component.css',
    imports: [
        GitGithubComponent,
        FirebaseComponent
    ]
})
export class GuiasComponent {

    constructor() { }

    guias = [
      {
        id: 1,
        title: 'Git-Github',
        component: GitGithubComponent
      },
      {
        id: 2,
        title: 'Firebase',
        component: FirebaseComponent
      }
    ]

}
