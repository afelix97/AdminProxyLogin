import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { SpanishPaginatorService } from './services/spanish-paginator.service';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActionOptions } from '@shared/components/tabla-filtro-paginacion/interfaces/action-options.interface';
import { DisplayedColumn } from './interfaces/diplayed-column.interface';

@Component({
  selector: 'app-tabla-filtro-paginacion',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatButtonModule],
  templateUrl: './tabla-filtro-paginacion.component.html',
  styleUrl: './tabla-filtro-paginacion.component.scss',
  providers: [
    { provide: MatPaginatorIntl, useClass: SpanishPaginatorService }
  ]
})
export class TablaFiltroPaginacionComponent {
  //displayedColumns:columnas a mostrar de la tabla
  @Input({ required: true }) displayedColumns: DisplayedColumn[] = [];
  //rowsForPage: listado de opciones para seleccionar cuantas filas por pagina puede mostrar
  @Input({ required: false }) rowsForPage: number[] = [5, 10, 25, 50, 100];
  //enabledStickyHeadScroll:si este campo se manda en true, al hacer scroll sobre la tabla, el header queda estatico
  @Input({ required: false }) enabledStickyHeadScroll: boolean = false;
  //dataTable: arreglo de datos para la tabla
  @Input({ required: false }) dataTable: Object[] = [];
  //showActionsOptions: especifica si se debe mostrar la columna de acciones y cuales botones debe mostrar, en caso de ser true, se debe de mandar la funcion para cada boton
  @Input({ required: false }) showActionsOptions: ActionOptions = { visible: false };

  dataSource: MatTableDataSource<Object> = new MatTableDataSource<Object>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {

    //valida si se requiere mostrar la columna de acciones
    if (this.showActionsOptions.visible) {
      this.displayedColumns.push({ columName: 'actions', aliasColumn: "Acciones" });
    }

    this.dataSource.data = this.dataTable;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // Forzar la verificación de cambios
    this.cdr.detectChanges();
  }

  //funcion para filtrar la informacion de la tabla a partir del input de filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //Retorna en un arreglo, solo el nombre de las columnas de la tabla a mostrar
  getOnlyArrayColumnsName(displayedColumn: DisplayedColumn[]): string[] {
    return displayedColumn.map(column => column.columName);
  }

  // función hasViewAction está diseñada para comprobar si la opción de visualización (viewAction) está definida en el objeto showActionsOptions. 
  // Esto permite condicionalmente mostrar el botón de visualización en la columna de acciones de la tabla.
  hasViewAction(): boolean {
    return !!this.showActionsOptions.viewAction;
  }

  // función hasEditAction está diseñada para comprobar si la opción de visualización (editAction) está definida en el objeto showActionsOptions. 
  // Esto permite condicionalmente mostrar el botón de edicion en la columna de acciones de la tabla.
  hasEditAction(): boolean {
    return !!this.showActionsOptions.editAction;
  }

  // función hasDeleteAction está diseñada para comprobar si la opción de visualización (deleteAction) está definida en el objeto showActionsOptions. 
  // Esto permite condicionalmente mostrar el botón de delete en la columna de acciones de la tabla.
  hasDeleteAction(): boolean {
    return !!this.showActionsOptions.deleteAction;
  }
}
