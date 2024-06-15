import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle,
} from '@angular/material/dialog';
import { ContentConfigurationInterface } from '../interfaces/content-configuration.interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'view-setting-proxy-dialog',
  templateUrl: 'view-setting-proxy.component.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatCardModule, MatDialogActions, MatButtonModule, MatDialogClose],
})
export class ViewSettingProxyDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ContentConfigurationInterface) { }

}
