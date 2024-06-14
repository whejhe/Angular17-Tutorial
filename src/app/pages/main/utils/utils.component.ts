// src/pages/main/utils/utils.component
import { Component } from '@angular/core';
import { ListCardComponent } from "../../../components/elements/list-card/list-card.component";

@Component({
    selector: 'app-utils',
    standalone: true,
    templateUrl: './utils.component.html',
    styleUrl: './utils.component.css',
    imports: [
      ListCardComponent
    ]
})
export class UtilsComponent {

}
