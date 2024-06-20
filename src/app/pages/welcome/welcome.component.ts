import { Component } from '@angular/core';
import { default as Push } from 'push.js';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  ngAfterViewInit(): void {
    
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })


    Push.create("Bienvenido!", {
      body: "Estas list@ para empezar?",
      icon: 'assets/img/logo/AdminProxyLogin.png',
      timeout: 10000,
      onClick: function () {
        window.focus();
        Push.clear();
      }
    });
  }
}
