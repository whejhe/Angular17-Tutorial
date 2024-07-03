import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGuiasComponent } from "../../../components/elements/list-guias/list-guias.component";
import { GuiaServiceService } from '../../../services/guia.service';

@Component({
    selector: 'app-guias',
    standalone: true,
    templateUrl: './guias.component.html',
    styleUrl: './guias.component.css',
    imports: [
        CommonModule,
        ListGuiasComponent
    ]
})
export class GuiasComponent implements OnInit {

  
  list: any[] = []
  topics: string[] = [
    "angular",
    "vue",
    "ionic",
    "framework"
  ];
  selectedTopic: string = '';
  filteredItems:any[] = [];
  
  constructor(private guiaSvc: GuiaServiceService) {}

  ngOnInit(): void {
    this.list = this.guiaSvc.list;
    this.filteredItems = this.list;  
  }

  onSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedTopic = selectElement.value;
    this.filterItems()
  }

  filterItems() {
    if (this.selectedTopic) {
      this.filteredItems = this.list.filter(item => item.topic.includes(this.selectedTopic));
    } else {
      this.filteredItems = this.list; // Mostrar todos los elementos si no hay ningún tema seleccionado
    }
  }


}
