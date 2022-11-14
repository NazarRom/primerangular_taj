import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { PrimerComponent } from 'src/components/primercomponent/primer.component';
// import { HooksAngular } from 'src/components/hooksangular/hooksangular.component';
//import { DeportesComponents } from 'src/components/deportes/deportes.component';
import { FormsModule } from '@angular/forms';
// import { FormularioBinding } from 'src/components/formulariobinding/formulariobinding.component';
// import { SumarNumeros } from 'src/components/sumarnumeros/sumarnumeros.component';
import { TablaMultiplicar } from 'src/components/tablamultiplicar/tablamultiplicar.component';
@NgModule({
  declarations: [
    AppComponent,
    // PrimerComponent,
    // HooksAngular,
    //DeportesComponents,
    // FormularioBinding
    // SumarNumeros
    TablaMultiplicar
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
