import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [ContainerComponent]
})
export class CoreModule {}
