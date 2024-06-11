import { Component, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
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
  router: Router = inject(Router);
  isViewWelcome: boolean = false;

  hasBackdrop = false;
  mode: MatDrawerMode[] = ['side', 'over', 'push'];

  @ViewChild('drawer') drawer!: MatDrawer;

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) { // Verifica si el evento es una navegación completada
        if (this.router.url === '/welcome') {
          this.isViewWelcome = true;
        } else {
          this.isViewWelcome = false;
        }
      }
    });
  }

  isMobileDevice(): boolean {
    return window.innerWidth <= 600;
  }

}
