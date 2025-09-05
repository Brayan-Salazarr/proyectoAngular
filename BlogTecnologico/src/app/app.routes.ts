import { Routes } from '@angular/router';
import { Principal } from './principal/principal';
import { Comentarios } from './comentarios/comentarios';
import { Categorias } from './categorias/categorias';
import { Experiencia } from './experiencia/experiencia';
import { Imagenes } from './imagenes/imagenes';
import { Perfil } from './perfil/perfil';

export const routes: Routes = [
    { path: '', component: Principal},
    { path: 'comentarios', component: Comentarios},
    { path: 'categoria', component: Categorias},
    { path: 'experiencia', component: Experiencia},
    { path: 'imagenes', component: Imagenes},
    { path: 'perfil', component: Perfil}
];
