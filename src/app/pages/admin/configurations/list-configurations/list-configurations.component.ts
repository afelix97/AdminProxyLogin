import { Component } from '@angular/core';
import { TablaFiltroPaginacionComponent } from '@shared/components/tabla-filtro-paginacion/tabla-filtro-paginacion.component';

@Component({
  selector: 'app-list-configurations',
  standalone: true,
  imports: [TablaFiltroPaginacionComponent],
  templateUrl: './list-configurations.component.html',
  styleUrl: './list-configurations.component.scss'
})
export class ListConfigurationsComponent {

}
