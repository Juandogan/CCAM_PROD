import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { GestorComponent } from './component/gestor/gestor.component';
import { MainComponent } from './component/main/main.component';

const routes: Routes = [

  {path:'', component:  MainComponent },
  {path:'gestor', component:  GestorComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
