// src/pages/main/utils/utils.component
import { Component, OnInit } from '@angular/core';
import { ListCardComponent } from "../../../components/elements/list-card/list-card.component";
import { ListaService } from '../../../services/lista.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-utils',
    standalone: true,
    templateUrl: './utils.component.html',
    styleUrl: './utils.component.css',
    imports: [
      ListCardComponent,
      CommonModule
    ]
})
export class UtilsComponent implements OnInit {

  list: any[] = [];
  topics: string[] = [
    'Animaciones',
    'Api',
    'Iconos',
    'IA',
    'Diseño',
    'Tipografia',
    'Colores',
    'Imagenes',
    'Herramientas',
    'Testing',
    'Trabajos Colaborativos'
  ];
  selectedTopic: string = '';
  filteredItems:any[] = [];

  constructor(private listaService: ListaService) { }

  ngOnInit(): void {
    this.list = this.listaService.list;
    this.filteredItems = this.list;
  }

  onSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedTopic = selectElement.value;
    this.filterItems();
  }

  filterItems() {
    if (this.selectedTopic) {
      this.filteredItems = this.list.filter(item => item.topic.includes(this.selectedTopic));
    } else {
      this.filteredItems = this.list; // Mostrar todos los elementos si no hay ningún tema seleccionado
    }
  }


}
