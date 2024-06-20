import { Component, ViewChild } from '@angular/core';
import { FormSettingProxyComponent } from '../form-setting-proxy/form-setting-proxy.component';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-store-setting-proxy',
  standalone: true,
  imports: [CommonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatButtonModule, MatDialogClose, FormSettingProxyComponent],
  templateUrl: './store-setting-proxy.component.html',
  styleUrl: './store-setting-proxy.component.scss'
})
export class StoreSettingProxyComponent {
  @ViewChild(FormSettingProxyComponent) formComponent!: FormSettingProxyComponent; // Acceso al componente hijo

  constructor(public dialogRef: MatDialogRef<StoreSettingProxyComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  submitForm(): void {
    if (this.formComponent) {
      this.formComponent.onSubmit();
    }
  }
}
