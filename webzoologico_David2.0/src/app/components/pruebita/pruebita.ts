import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pruebita',
  imports: [FormsModule],
  templateUrl: './pruebita.html',
  styleUrl: './pruebita.css'
})
export class Pruebita {
  titulo = "Pruebita Funcionando";

}
