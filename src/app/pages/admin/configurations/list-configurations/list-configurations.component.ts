import { Component } from '@angular/core';
import { TablaFiltroPaginacionComponent } from '@shared/components/tabla-filtro-paginacion/tabla-filtro-paginacion.component';
import { ActionOptions } from '@shared/components/tabla-filtro-paginacion/interfaces/action-options.interface';
import { DisplayedColumn } from '@shared/components/tabla-filtro-paginacion/interfaces/diplayed-column.interface';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry lorem iaisifi sfsii aasi sfsaii  iais sfiis asifi sfsii aasi sfsaii  iais sfiis asifi sfsii aasi sfsaii sfiis asifi sfsii aasi sfsaii',
  'lychee iais sfiis aiaifi sfsii aasi sfsaii  iais sfiis asifi sfsii aasi sfsaii  iais sfiis asifi sfsii aasi sfsaiiis sfiis asifi sfsii aasi sfsaiisifi sfsii aasi sfsaii',
  'kiwiais sfiis asifiifi sfsii aasi sfsaii  iais sfiis asifi sfsii aasi sfsaii  iais sfiis asifi sfsii aasi sfsaii sfsii aasi sfsaiii',
  'mangoiais sfiis asifi iais sfiis asifi sfsii aasi sfsaiisfsii aasi sfsaii',
  'peach iais sfiis asifi sfsii aasi sfsaii  iais sfiis asifi sfsii aasi sfsaii  iais sfiis asifi sfsii aasi sfsaii',
  'lime iais sfiis asifi sfsii aasi sfsiais sfiis asiais sfiis asifi sfsii aasi sfsaiiifi sfsii aasi sfsaiiaii ',
  'pomegranate iaifi sfsii aasi sfsaii  iais sfiis asifi sfsii aasi sfsaii  iais sfiis asifi sfsii aasi sfsaiiis sfiis asifi sfsii aasi sfsaii',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-list-configurations',
  standalone: true,
  imports: [TablaFiltroPaginacionComponent],
  templateUrl: './list-configurations.component.html',
  styleUrl: './list-configurations.component.scss'
})
export class ListConfigurationsComponent {
  displayedColumns: DisplayedColumn[] = [
    { columName: 'id', aliasColumn: 'ID' },
    { columName: 'name', aliasColumn: 'Nombre' },
    { columName: 'progress', aliasColumn: 'Progreso' },
    { columName: 'fruit', aliasColumn: 'Fruta' }
  ];
  dataUsers: UserData[] = [];

  //Objeto para el componente de tabla-filtro-pagination, para la columna de acciones
  actionsOptions: ActionOptions = {
    visible: true,
    viewAction: this.viewRow,
    editAction: this.editRow,
    deleteAction: this.deleteRow,
  }


  ngOnInit() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => this.createNewUser(k + 1));
    this.dataUsers = users;
    // ...
  }
  /** Builds and returns a new User. */
  createNewUser(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';

    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    };
  }

  viewRow(row: any) {
    console.log('Viewing row:', row);
    // Lógica para ver el elemento
  }

  editRow(row: any) {
    console.log('Editing row:', row);
    // Lógica para editar el elemento
  }

  deleteRow(row: any) {
    console.log('Deleting row:', row);
    // Lógica para eliminar el elemento
  }
}
