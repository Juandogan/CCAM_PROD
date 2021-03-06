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
import { EditorCabeceraComponent  } from './component/editor-cabecera/editor-cabecera.component';
import { EditorCuerpoComponent } from './component/editorCuerpo/editorCuerpo.component';
import { GestorPubliComponent } from './component/gestor-publi/gestor-publi.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './component/login/login.component';
import { LogonComponent } from './component/logon/logon.component';
import { GestorComentariosComponent } from './component/gestorComentarios/gestorComentarios.component';
import { EditorComentariosComponent } from './component/editor-comentarios/editor-comentarios.component';
const routes: Routes = [

  {path:'', component:  MainComponent },
  {path:'suscripcion', component:  SuscripcionComponent },
  {path:'quienesSomos', component:  QuienesSomosComponent },
  {path:'subidas', component:  SubidasComponent },
  {path:'formaParte', component:  FormaParteComponent },
  {path:'gestor', component:  GestorComponent, canActivate: [AuthGuard] },
  {path:'login', component:  LoginComponent },
  {path:'editorCabecera/:_id', component:  EditorCabeceraComponent, resolve: {data: ResolveNotaService} },
  {path:'editorCuerpo/:_id', component: EditorCuerpoComponent, resolve: {data: ResolveNotaService} },
  {path:'buscador', component:  BuscadorComponent, resolve: {data: ResolveNotaService} },
  {path:'articulo/:_id', component: ArticuloComponent, resolve: {data: ResolveNotaService}},
  {path:'categoria/:categoria', component: CategoriaComponent, resolve: {data: ResolveNotaService}},
  {path:'gestorPubli', component: GestorPubliComponent},
  {path:'gestorComentarios', component: GestorComentariosComponent},
  {path:'logon', component: LogonComponent},
  {path:'editorComentarios/:_id', component: EditorComentariosComponent, resolve: {data: ResolveNotaService}}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
