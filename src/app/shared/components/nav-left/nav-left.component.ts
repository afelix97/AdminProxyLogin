import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterModule } from '@angular/router';
import { LinkSectionNavInterface } from './interfaces/link-section-nav.interface';

@Component({
  selector: 'app-nav-left',
  standalone: true,
  imports: [CommonModule, RouterModule, MatListModule, MatIconModule, MatDividerModule, RouterLink],
  templateUrl: './nav-left.component.html',
  styleUrl: './nav-left.component.scss'
})
export class NavLeftComponent {
  routesLinks: LinkSectionNavInterface[] = [
    {
      name: 'Inicio',
      icon: 'home',
      url: 'welcome'
    },
    {
      name: 'Usuarios',
      icon: 'supervised_user_circle',
      url: 'users'
    },
    {
      name: 'Configuraciones Proxy',
      icon: 'dns',
      url: 'settings-proxy'
    },
  ];
}
