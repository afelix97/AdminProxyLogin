import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValuesEndpointInterface } from '../interfaces/values-endpoint.interface';
import { ContentConfigurationInterface } from '../interfaces/content-configuration.interface';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-setting-proxy',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './form-setting-proxy.component.html',
  styleUrl: './form-setting-proxy.component.scss'
})
export class FormSettingProxyComponent {
  @Input({ required: false }) valueObject?: ValuesEndpointInterface;
  @Input({ required: false }) data?: ContentConfigurationInterface;

  contentConfigForm!: FormGroup;
  httpMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.initializeForm();

  }

  initializeForm(): void {
    this.contentConfigForm = this.formBuilder.group({
      content_configuration_id: [{ value: null, disabled: true }],
      name: [this.data?.name, [Validators.required, Validators.maxLength(100)]],
      value: [{ value: this.data?.value ? this.data?.value : 'Campo autogenerado, Ejemplo: {"type": "GET","ip": "127.0.0.1","port": "80","url": "http://<ip>:<port>/microservice/route"}', disabled: true }, [Validators.required]],
      type: [this.data?.type, [Validators.required]],
      category: [this.data?.category, [Validators.required]],
      //values data
      endpoint: this.formBuilder.group({
        method: [this.valueObject?.type, [Validators.required, this.httpMethodValidator()]],
        ip: [this.valueObject?.ip ? this.valueObject.ip : '127.0.0.1', [Validators.required, Validators.pattern('^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$|^[a-zA-Z0-9.-]+$')]], // Valida IP o hostname
        port: [this.valueObject?.port, [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],// Valida que sea un número
      })
    });

    // Suscribirse a los cambios en los campos del endpoint para actualizar el campo "Valor"
    this.contentConfigForm.get('endpoint')?.valueChanges.subscribe(values => {
      const { method, ip, port } = values;
      if (method && ip && port) {
        const value = `{"type": "${method}","ip": "${ip}","port": "${port}","url": "http://<ip>:<port>/credenciales/getCredencial"}`;
        this.contentConfigForm.patchValue({ value }, { emitEvent: false });
      }
    });
  }

  getErrorMessage(formControlName: string, groupName?: string): string {
    const control = groupName
      ? this.contentConfigForm.get(groupName)?.get(formControlName)
      : this.contentConfigForm.get(formControlName);

    if (control?.hasError('required')) {
      return 'Este campo es requerido';
    } else if (control?.hasError('maxlength')) {
      return `Máximo ${control.getError('maxlength').requiredLength} caracteres`;
    } else if (control?.hasError('pattern')) {
      return 'Formato inválido';
    }
    return '';
  }

  httpMethodValidator() {
    return (control: AbstractControl) => {
      if (this.httpMethods.includes(control.value)) {
        return null; // válido
      } else {
        return { invalidHttpMethod: true }; // inválido
      }
    };
  }

  toUpperCase(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase();
    this.contentConfigForm.get('endpoint.method')?.setValue(input.value);
  }

  onSubmit(): void {
    if (this.contentConfigForm.valid) {
      const formData: ContentConfigurationInterface = this.contentConfigForm.getRawValue();
      console.log('Form Data: ', formData);
      // Aquí puedes agregar la lógica para enviar el formulario al servidor
    }else{
      console.log('Invalid form');

    }
  }

}
