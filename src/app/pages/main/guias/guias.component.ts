import { Component } from '@angular/core';
import { FirebaseComponent } from "./firebase/firebase.component";
import { GithubActionsComponent } from './github-actions/github-actions.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-guias',
    standalone: true,
    templateUrl: './guias.component.html',
    styleUrl: './guias.component.css',
    imports: [
        FirebaseComponent,
        GithubActionsComponent,
        CommonModule
    ]
})
export class GuiasComponent {

  constructor(private router: Router) {}

  guias = [
    {
      ruta: 'github-actions',
      component: GithubActionsComponent
    },
    {
      ruta: 'firebase',
      component: FirebaseComponent
    }
  ]

  selectComponent: string | null = null;

  onSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectComponent = selectElement.value;
  }


}
