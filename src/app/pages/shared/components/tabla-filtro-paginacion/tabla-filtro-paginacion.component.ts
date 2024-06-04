import { Component } from '@angular/core';
import { SpanishPaginatorService } from './services/spanish-paginator.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-tabla-filtro-paginacion',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './tabla-filtro-paginacion.component.html',
  styleUrl: './tabla-filtro-paginacion.component.scss',
  providers: [
    { provide: MatPaginatorIntl, useClass: SpanishPaginatorService }
  ]
})
export class TablaFiltroPaginacionComponent {

}
