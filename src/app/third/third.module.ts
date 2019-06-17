import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdComponent } from './third.component';

@NgModule({
  declarations: [ThirdComponent],
  exports: [ThirdComponent],
  imports: [
    CommonModule
  ]
})
export class ThirdModule { }
