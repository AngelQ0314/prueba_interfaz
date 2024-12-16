import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.scss'
})

export class CarruselComponent {

  products = [
    { 
      name: 'Diddy 1', 
      price: 10000000, 
      inventoryStatus: 'In Stock', 
      image: 'https://i.abcnewsfe.com/a/6e6d16df-eb73-40e1-8066-cb5cf32a8251/sean-combs-gty-jt-241010_1728585703212_hpMain.jpg'
    },
    { 
      name: 'Diddy  2', 
      price: 10000000, 
      inventoryStatus: 'In Stock', 
      image: 'https://imageio.forbes.com/specials-images/imageserve/6750b9db54a9bac0a411b73d/Sexual-Misconduct-Diddy/0x0.jpg?crop=3225,1814,x0,y0,safe&height=399&width=711&fit=bounds'
    },
    { 
      name: 'Diddy 3', 
      price: 10000000, 
      inventoryStatus: 'In Stock', 
      image: 'https://e3.365dm.com/24/10/768x432/skynews-p-diddy-sean-combs_6716191.jpg'
    },
    { 
      name: 'Diddy 4', 
      price: 10000000, 
      inventoryStatus: 'In Stock', 
      image: 'https://i0.wp.com/efe.com/wp-content/uploads/2024/05/EA1229-USA-AWARDS-SHOW.jpg?resize=980%2C654&ssl=1'
    },
    { 
      name: 'Diddy 5', 
      price: 10000000, 
      inventoryStatus: 'In Stock', 
      image: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/10/04/17280582161502.jpg'
    },
    { 
      name: 'Diddy 6', 
      price: 10000000, 
      inventoryStatus: 'In Stock', 
      image: 'https://img2.rtve.es/i/?w=1200&i=https://img.rtve.es/imagenes/imagenes-puff-daddy-con-famosos-bulos-desinformacion/01729098622936.jpg'
    },
  ];

  // Configuración del carrusel (responsiveOptions)
  responsiveOptions = [
    {
      breakpoint: '2060px',
      numVisible: 3,  
      numScroll: 1
    },
    {
      breakpoint: '980px',
      numVisible: 2,  
      numScroll: 1
    },
    {
      breakpoint: '660px',
      numVisible: 1,   
      numScroll: 1
    },

  ];

  // Método para determinar el severidad de la disponibilidad
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
  }
}

      constructor(private router: Router){}
  
      redirigir(){
        this.router.navigate([''])
      }
}
