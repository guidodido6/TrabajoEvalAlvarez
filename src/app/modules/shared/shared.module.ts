import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// componentes importados de material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,

  ],
  
})
export class AppModule { }
