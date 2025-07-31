import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StrategyResponseModel } from '../../core/models/StrategyResponse.model';
import { StrategyResponseDto } from '../dtos/StrategyResponse.dto';
import { ResponseBaseDto } from '../dtos/ResponseBase.dtol';
import { StrategyMapper } from '../../core/mappers/strategy.mapper';
import { map } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class StrategyService {

  constructor(
    private http: HttpClient
  ) { }

  getAllStrategies(maxLaps: number, driverId: number) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': environment.apikey
      });
      return this.http.get<ResponseBaseDto<StrategyResponseDto[]>>(environment.api + '/api/Strategy/optimal-by-id?maxLaps=' + maxLaps + '&driverId=' + driverId, { headers }).pipe(
        map((response: ResponseBaseDto<StrategyResponseDto[]>) => {
          return {
            statusCode: response.statusCode,
            message: response.message,
            data: StrategyMapper.toModel(response.data),
          }
  
        }));
     }
}
