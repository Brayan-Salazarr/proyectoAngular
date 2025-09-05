import { Routes } from '@angular/router';
import { Principal } from './principal/principal';
import { Comentarios } from './comentarios/comentarios';
import { Categorias } from './categorias/categorias';
import { Experiencia } from './experiencia/experiencia';
import { Imagenes } from './imagenes/imagenes';
import { ImagenesMovi } from './imagenes-movi/imagenes-movi';
import { Perfil } from './perfil/perfil';

export const routes: Routes = [
    { path: '', component: Principal},
    { path: 'comentario ', component: Comentarios},
    { path: 'categoria ', component: Categorias},
    { path: 'experiencia ', component: Experiencia},
    { path: 'imagenes ', component: Imagenes},
    { path: 'ImgagenesMovi ', component: ImagenesMovi},
    { path: 'perfil ', component: Perfil}
];
