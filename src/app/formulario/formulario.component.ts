import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

    profileForm: FormGroup;
  
    constructor(private fb: FormBuilder, public router:Router) {
      this.profileForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        cedula: ['', Validators.required],
        opinion: ['', Validators.required],
        direccion: ['', Validators.required],
        gender: ['', Validators.required],
        message: ['', Validators.required],
        agree: [false, Validators.requiredTrue],
      });
      
    }
  
    onSubmit(): void {
      if (this.profileForm.valid) {
        console.log(this.profileForm.value);
      } else {
        console.log('Formulario no válido');
      }
    }
  
    redirigir() {
      this.router.navigate(['']);
    }
  

}
