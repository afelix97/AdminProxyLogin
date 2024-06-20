import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { ContentConfigurationInterface } from '../interfaces/content-configuration.interface';
import { MatButtonModule } from '@angular/material/button';
import { ValuesEndpointInterface } from '../interfaces/values-endpoint.interface';
import { CommonModule } from '@angular/common';
import { FormSettingProxyComponent } from '../form-setting-proxy/form-setting-proxy.component';

@Component({
  selector: 'app-edit-setting-proxy',
  standalone: true,
  imports: [CommonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatButtonModule, MatDialogClose, FormSettingProxyComponent],
  templateUrl: './edit-setting-proxy.component.html',
  styleUrl: './edit-setting-proxy.component.scss'
})
export class EditSettingProxyComponent {
  valueObject!: ValuesEndpointInterface;

  @ViewChild(FormSettingProxyComponent) formComponent!: FormSettingProxyComponent; // Acceso al componente hijo

  constructor(public dialogRef: MatDialogRef<EditSettingProxyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ContentConfigurationInterface) {
    this.valueObject = JSON.parse(this.data.value);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  submitForm(): void {
    if (this.formComponent) {
      this.formComponent.onSubmit();
    }
  }

}
