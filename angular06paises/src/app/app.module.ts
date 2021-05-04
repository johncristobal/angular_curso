import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRountingModule } from './app-rounting.module';

import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PaisModule,
    SharedModule,
    BrowserModule,
    AppRountingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
