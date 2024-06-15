import { Component, Inject, inject } from '@angular/core';
import { TablaFiltroPaginacionComponent } from '@shared/components/tabla-filtro-paginacion/tabla-filtro-paginacion.component';
import { ActionOptions } from '@shared/components/tabla-filtro-paginacion/interfaces/action-options.interface';
import { DisplayedColumn } from '@shared/components/tabla-filtro-paginacion/interfaces/diplayed-column.interface';
import { SettingProxyServices } from '../services/settings-proxy.service';
import { ContentConfigurationInterface } from '../interfaces/content-configuration.interface';
import { MatDialog } from '@angular/material/dialog';
import { ViewSettingProxyDialogComponent } from '../view-setting-proxy/view-setting-proxy.component';

@Component({
  selector: 'app-index-settings-proxy',
  standalone: true,
  imports: [TablaFiltroPaginacionComponent],
  templateUrl: './index-settings-proxy.component.html',
  styleUrl: './index-settings-proxy.component.scss'
})
export class IndexSettingsProxyComponent {
  displayedColumns: DisplayedColumn[] = [
    { columName: 'content_configuration_id', aliasColumn: 'ID' },
    { columName: 'name', aliasColumn: 'Name' },
    { columName: 'type', aliasColumn: 'Application' },
    { columName: 'category', aliasColumn: 'Category' },
    { columName: 'value', aliasColumn: 'Value' },
    { columName: 'creation_date', aliasColumn: 'Fecha Alta' },
    { columName: 'change_date', aliasColumn: 'Ultima Actualizacion' },
    { columName: 'created_by', aliasColumn: 'Creador' },
    { columName: 'changed_by', aliasColumn: 'Actualizado por' },
    { columName: 'version', aliasColumn: 'Version' }
  ];
  dataUsers: ContentConfigurationInterface[] = [];

  /* Observables */
  $_SettingProxyServices = inject(SettingProxyServices);

  //Objeto para el componente de tabla-filtro-pagination, para la columna de acciones
  actionsOptions: ActionOptions = {
    visible: true,
    viewAction: this.viewRow.bind(this),//.bind(this) -> para asegurar que el contexto de this se mantenga correctamente
    editAction: this.editRow.bind(this),//.bind(this) -> para asegurar que el contexto de this se mantenga correctamente
    deleteAction: this.deleteRow.bind(this),//.bind(this) -> para asegurar que el contexto de this se mantenga correctamente
  };

  dialog = inject(MatDialog);

  ngOnInit() {
    this.dataUsers = this.$_SettingProxyServices.getSettingsProxy();
  }

  viewRow(row: Object | ContentConfigurationInterface) {
    this.dialog.open(ViewSettingProxyDialogComponent, {
      data: row
    });
  }

  editRow(row: Object | ContentConfigurationInterface) {
    console.log('Editing row:', row);
    // Lógica para editar el elemento
  }

  deleteRow(row: Object | ContentConfigurationInterface) {
    console.log('Deleting row:', row);
    // Lógica para eliminar el elemento
  }
}

