import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle,
} from '@angular/material/dialog';
import { ContentConfigurationInterface } from '../interfaces/content-configuration.interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ValuesEndpointInterface } from '../interfaces/values-endpoint.interface';
import moment from 'moment';
import 'moment/locale/es';

@Component({
  selector: 'view-setting-proxy-dialog',
  templateUrl: 'view-setting-proxy.component.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatCardModule, MatDialogActions, MatButtonModule, MatDialogClose],
})
export class ViewSettingProxyDialogComponent {
  valueObject?: ValuesEndpointInterface;
  endpointFormat?: string;

  dateCreateFormat?: string;
  dateUpdateFormat?: string;

  constructor(private cdr: ChangeDetectorRef, @Inject(MAT_DIALOG_DATA) public data: ContentConfigurationInterface) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.dateCreateFormat = moment(this.data.creation_date).format('DD [de] MMMM [del] YYYY [a la(s)] hh:mm A');
    this.dateUpdateFormat = moment(this.data.change_date).format('DD [de] MMMM [del] YYYY [a la(s)] hh:mm A');
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.valueObject = JSON.parse(this.data.value);

    this.endpointFormat = this.valueObject?.url.replace("<ip>", this.valueObject.ip).replace("<port>", this.valueObject.port);

    // Forzar la verificación de cambios
    this.cdr.detectChanges();
  }
}
