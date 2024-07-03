import { Component, Input, OnInit } from '@angular/core';
import { GuiaServiceService } from '../../../services/guia.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-guias',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './list-guias.component.html',
  styleUrl: './list-guias.component.css'
})
export class ListGuiasComponent implements OnInit {

  constructor(
    private guiaSvc:GuiaServiceService
  ){}

  @Input() items:any[] = [];

  list:any[] = [];

  ngOnInit(): void {
      this.list = this.guiaSvc.list;
  }

}
