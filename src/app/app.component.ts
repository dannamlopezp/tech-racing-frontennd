import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriverResponseModel } from './core/models/DriverResponse.model';
import { DriverRepository } from './core/repositories/driver.repository';
import { HttpErrorResponse } from '@angular/common/http';
import { ResponseBaseDto } from './insfraestructure/dtos/ResponseBase.dtol';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StrategyResponseModel } from './core/models/StrategyResponse.model';
import { StrategyRepository } from './core/repositories/strategy.repository';
import { StrategyResponseDto } from './insfraestructure/dtos/StrategyResponse.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tech-racing-frontend';
  formStrategy!: FormGroup;
  drivers: DriverResponseModel[] = [];
  strategy: StrategyResponseModel[] = [];

  constructor(private fb: FormBuilder, private strategyRepository: StrategyRepository, private driverRepository: DriverRepository, private snackBar: MatSnackBar) {
    this.formStrategy = this.fb.group({
      driverId: [null, Validators.required],
      maxLaps: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.getAllDrivers();
  }

  getAllDrivers() {
    this.driverRepository.getDrivers().subscribe({
      next: (response: ResponseBaseDto<any[]>) => {
        // Map DriverResponseDto[] to DriverResponseModel[]
        this.drivers = response.data;
        ;
      },
      error: (error: HttpErrorResponse) => {
        this.mostrarMensaje("Error al obtener los conductores");
      }
    });
  }

  
    mostrarMensaje(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  
    }

    getStrategies() {
    this.strategy = [];
    const driverId = this.formStrategy.get('driverId')?.value;
    const maxLaps = this.formStrategy.get('maxLaps')?.value;
    if(!this.formStrategy.get('driverId')?.value || !this.formStrategy.get('maxLaps')?.value || this.formStrategy.invalid){
      this.mostrarMensaje("Por favor, complete todos los campos requeridos.");
      return;
    }
    
    if (driverId && maxLaps) {
      this.strategyRepository.getAllStrategies(maxLaps, driverId).subscribe({
        next: (response: ResponseBaseDto<StrategyResponseDto[]>) => {
          this.strategy = response.data;
          this.mostrarMensaje("Estrategias generadas correctamente");
        },
        error: (error: HttpErrorResponse) => {
          this.mostrarMensaje("Error al generar estrategias");
        }
      });
    } else {
      console.error('Driver ID and Max Laps are required to fetch strategies.');
    }
    this.formStrategy.get('maxLaps')?.setValue(null);
    this.formStrategy.get('driverId')?.setValue(null);
    this.formStrategy.reset();
  }

}
