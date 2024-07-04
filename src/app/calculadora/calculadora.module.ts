import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CalculadoraService } from './services';

@NgModule({
  declarations: [CalculadoraComponent],
  imports: [CommonModule, FormsModule],
  exports: [CalculadoraComponent],
  providers: [CalculadoraService],
})
export class CalculadoraModule {}
