import { Injectable } from '@angular/core';
import { AppStorageValues } from '@global/app.storage-values';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  //retorna el status de la navbar left
  public isExpandNavBar(): boolean {
    const expandedNavbarValue = sessionStorage.getItem(AppStorageValues.EXPANDED_NAVBAR);
    // Convierte el valor a booleano. Si no hay valor, devuelve false por defecto.
    return expandedNavbarValue === 'true';
  }

  //setea el valor del sesion storage (true o false), para ocultarla o mostrarla
  setStatusNavBar(status: string): void {
    sessionStorage.setItem(AppStorageValues.EXPANDED_NAVBAR, status);
  }
}
