import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DriverRepository } from './core/repositories/driver.repository';
import { DriverService } from './insfraestructure/services/driver.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CardComponent } from './modules/card/card.component';
import { StrategyRepository } from './core/repositories/strategy.repository';
import { StrategyService } from './insfraestructure/services/strategy.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    CardComponent
],
  providers: [{provide: DriverRepository, useClass: DriverService},{provide: StrategyRepository, useClass: StrategyService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
