import { Routes } from '@angular/router';
import { Pruebita } from './components/pruebita/pruebita';
import { AnimalComponent } from './components/animal-component/animal-component';

export const routes: Routes = [
    {path:"inicio", component: Pruebita},
    { path: 'animales', component: AnimalComponent }

];
