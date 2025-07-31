import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseBaseDto } from '../dtos/ResponseBase.dtol';
import { map } from 'rxjs';
import { DriverMapper } from '../../core/mappers/driver.mapper';
import { DriverResponseDto } from '../dtos/DriverResponse.dto';
import { environment } from 'src/environment';
@Injectable({
  providedIn: 'root'
})
export class DriverService{


  constructor(
    private http: HttpClient
  ) {

   }
    
   getDrivers() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': environment.apikey
    });
    return this.http.get<ResponseBaseDto<DriverResponseDto[]>>(environment.api + '/api/Driver/drivers', { headers }).pipe(
      map((response: ResponseBaseDto<DriverResponseDto[]>) => {
        return {
          statusCode: response.statusCode,
          message: response.message,
          success: response.success,
          data: DriverMapper.toModel(response.data),
        } as ResponseBaseDto<any>;
      }));
   }
    }