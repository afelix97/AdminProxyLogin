import { Component, Inject, Input, ViewEncapsulation, inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { DOCUMENT } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { AppService } from '@services/app.service';

@Component({
  selector: 'app-nav-top',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatButtonModule, MatIconModule, MatGridListModule, MatMenuModule],
  templateUrl: './nav-top.component.html',
  styleUrl: './nav-top.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NavTopComponent {
  @Input() drawer!: MatDrawer;

  appService: AppService = inject(AppService);

  _dom: any;
  fullScreenGestor: Boolean = false;

  constructor(@Inject(DOCUMENT) private document: any) {
    this._dom = document.documentElement;
  }

  ocultarMenu() {
    this.drawer.toggle();

    this.appService.setStatusNavBar((!this.appService.isExpandNavBar()).toString());
  }

  openFullscreen() {
    if (this._dom.requestFullscreen) {
      this._dom.requestFullscreen();
      this.fullScreenGestor = true;
    } else if (this._dom.mozRequestFullScreen) {
      /* Firefox */
      this._dom.mozRequestFullScreen();
      this.fullScreenGestor = true;
    } else if (this._dom.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this._dom.webkitRequestFullscreen();
      this.fullScreenGestor = true;
    } else if (this._dom.msRequestFullscreen) {
      /* IE/Edge */
      this._dom.msRequestFullscreen();
      this.fullScreenGestor = true;
    }
  }
  /* Close fullscreen */
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
      this.fullScreenGestor = false;
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
      this.fullScreenGestor = false;
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
      this.fullScreenGestor = false;
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
      this.fullScreenGestor = false;
    }
  }
  isMobileDevice(): boolean {
    return window.innerWidth <= 600;
  }
}
