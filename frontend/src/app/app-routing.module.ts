import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ArticuloComponent } from './component/articulo/articulo.component';
import { GestorComponent } from './component/gestor/gestor.component';
import { MainComponent } from './component/main/main.component';
import { ResolveNotaService } from './service/resolve-nota.service';
const routes: Routes = [

  {path:'', component:  MainComponent },
  {path:'gestor', component:  GestorComponent },
  {path:'articulo/:_id', component: ArticuloComponent, resolve: {data: ResolveNotaService}},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
