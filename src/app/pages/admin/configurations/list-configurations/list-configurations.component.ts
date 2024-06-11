import { Component } from '@angular/core';
import { TablaFiltroPaginacionComponent } from '@shared/components/tabla-filtro-paginacion/tabla-filtro-paginacion.component';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
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
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit']
  dataUsers: UserData[] = [];


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

}
