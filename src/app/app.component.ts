import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavTopComponent } from './pages/shared/components/nav-top/nav-top.component';
import { MatDrawer, MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { NavLeftComponent } from './pages/shared/components/nav-left/nav-left.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavTopComponent, MatSidenavModule, NavLeftComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'App component';
  showNavLeft: boolean = true;

  hasBackdrop = false;
  mode: MatDrawerMode[] = ['side', 'over', 'push'];

  @ViewChild('drawer') drawer!: MatDrawer;

}
