import { Observable } from "rxjs";
import { DriverResponseDto } from "src/app/insfraestructure/dtos/DriverResponse.dto";
import { ResponseBaseDto } from "src/app/insfraestructure/dtos/ResponseBase.dtol";

export abstract class DriverRepository {
    abstract getDrivers(): Observable<ResponseBaseDto<DriverResponseDto[]>>;
}