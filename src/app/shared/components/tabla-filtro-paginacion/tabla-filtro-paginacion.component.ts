import { Component, Input, ViewChild } from '@angular/core';
import { SpanishPaginatorService } from './services/spanish-paginator.service';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule } from '@angular/material/sort';


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
  //displayedColumns:columnas a mostrar de la tabla
  @Input({ required: true }) displayedColumns: string[] = [];
  //rowsForPage: listado de opciones para seleccionar cuantas filas por pagina puede mostrar
  @Input({ required: false }) rowsForPage: number[] = [5, 10, 25, 50, 100];
  //enabledStickyHeadScroll:si este campo se manda en true, al hacer scroll sobre la tabla, el header queda estatico
  @Input({ required: false }) enabledStickyHeadScroll: boolean = false;
  //dataTable: arreglo de datos para la tabla
  @Input({ required: false }) dataTable: Object[] = [];
  
  dataSource: MatTableDataSource<Object> = new MatTableDataSource<Object>();


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.data = this.dataTable;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //funcion para filtrar la informacion de la tabla a partir del input de filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
