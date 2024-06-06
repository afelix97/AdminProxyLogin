import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDrawer, MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { NavTopComponent } from '@shared/components/nav-top/nav-top.component';
import { NavLeftComponent } from '@shared/components/nav-left/nav-left.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavTopComponent, MatSidenavModule, NavLeftComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'App component';
  showNavLeft: boolean = true;

  hasBackdrop = false;
  mode: MatDrawerMode[] = ['side', 'over', 'push'];

  @ViewChild('drawer') drawer!: MatDrawer;

  isMobileDevice(): boolean {
      return window.innerWidth <= 600;
  }
}
