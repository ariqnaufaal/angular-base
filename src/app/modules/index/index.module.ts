import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { SharedModule } from '../shared/shared.module';
import { IndexRoutingModule } from './index.routes';

import { IndexComponent } from './index.component';


@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
