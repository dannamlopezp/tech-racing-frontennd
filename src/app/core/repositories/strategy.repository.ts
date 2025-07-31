import { Observable } from "rxjs";
import { ResponseBaseDto } from "src/app/insfraestructure/dtos/ResponseBase.dtol";
import { StrategyResponseDto } from "src/app/insfraestructure/dtos/StrategyResponse.dto";

export abstract class StrategyRepository {
    abstract getAllStrategies(maxLaps: number, driverId: number): Observable<ResponseBaseDto<StrategyResponseDto[]>>;
}