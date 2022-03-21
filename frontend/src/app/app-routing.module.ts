import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ArticuloComponent } from './component/articulo/articulo.component';
import { BuscadorComponent } from './component/buscador/buscador.component';
import { FormaParteComponent } from './component/forma-parte/forma-parte.component';
import { GestorComponent } from './component/gestor/gestor.component';
import { MainComponent } from './component/main/main.component';
import { QuienesSomosComponent } from './component/quienes-somos/quienes-somos.component';
import { SubidasComponent } from './component/subidas/subidas.component';
import { CategoriaComponent } from './component/categoria/categoria.component';
import { SuscripcionComponent } from './component/suscripcion/suscripcion.component';
import { ResolveNotaService } from './service/resolve-nota.service';
const routes: Routes = [

  {path:'', component:  MainComponent },
  {path:'suscripcion', component:  SuscripcionComponent },
  {path:'quienesSomos', component:  QuienesSomosComponent },
  {path:'subidas', component:  SubidasComponent },
  {path:'formaParte', component:  FormaParteComponent },
  {path:'gestor', component:  GestorComponent },
  {path:'buscador', component:  BuscadorComponent, resolve: {data: ResolveNotaService} },
  {path:'articulo/:_id', component: ArticuloComponent, resolve: {data: ResolveNotaService}},
  {path:'categoria/:categoria', component: CategoriaComponent, resolve: {data: ResolveNotaService}}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
