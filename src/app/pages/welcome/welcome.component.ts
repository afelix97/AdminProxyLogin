import { Component } from '@angular/core';
import { default as Push } from 'push.js';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    setTimeout(() => {

    /*  Swal.fire({
        position: "center",
        icon: "success",
        title: "Hola!",
        showConfirmButton: false,
        timer: 1000
      });*/

      Push.create("Bienvenido!", {
        body: "Estas list@ para empezar?",
        icon: 'assets/img/logo/AdminProxyLogin.png',
        timeout: 10000,
        onClick: function () {
          window.focus();
          Push.clear();
        }
      });
    }, 1000);
  }
}
