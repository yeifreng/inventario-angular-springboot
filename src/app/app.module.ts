import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoProductoComponent } from './listado-producto/listado-producto.component';
import { ListadoProveedorComponent } from './listado-proveedor/listado-proveedor.component';
import { ListadoCategoriaComponent } from './listado-categoria/listado-categoria.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoProductoComponent,
    ListadoProveedorComponent,
    ListadoCategoriaComponent,
    MenuPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
