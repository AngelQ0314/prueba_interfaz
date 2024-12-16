import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.scss'
})
export class FotosComponent {
  constructor(private router: Router){}
  
  redirigir(){
    this.router.navigate([''])
  }

}
