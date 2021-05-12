import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule
  ]
})
export class PrimerNgModule { }
