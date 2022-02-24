import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MainComponent } from './component/main/main.component';
import { GestorComponent } from './component/gestor/gestor.component';
import { CrudService } from './service/crud.service';
import { ResolveNotaService } from './service/resolve-nota.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';


import { CKEditorModule } from '@ckeditor/ckeditor5-angular';




import {MatIconModule} from '@angular/material/icon';
import { TruncatePipe } from './pipes/truncate.pipe';
import { Portadax2Component } from './component/portadax2/portadax2.component';
import { EditorComponent } from './component/editor/editor.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { CardBajoPortadaComponent } from './component/card-bajo-portada/card-bajo-portada.component';
import { CardBajopublix3Component } from './component/card-bajopublix3/card-bajopublix3.component';
import { FooterCardComponent } from './component/footer-card/footer-card.component';
import { ArticuloComponent } from './component/articulo/articulo.component';
import { SanetizerPipe } from './pipes/sanetizer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    GestorComponent,
    TruncatePipe,
    Portadax2Component,
    EditorComponent,
    CarouselComponent,
    CardBajoPortadaComponent,
    CardBajopublix3Component,
    FooterCardComponent,
    ArticuloComponent,
    SanetizerPipe
  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    MatRippleModule,
    MatMenuModule
    
    
  ],
  providers: [CrudService, ResolveNotaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
