import { DriverResponseDto } from "src/app/insfraestructure/dtos/DriverResponse.dto";
import { DriverResponseModel } from "../models/DriverResponse.model";

export class DriverMapper {
    static toDto(model: DriverResponseModel): DriverResponseDto {
        return {
        id: model.Id,
        name: model.Name,
        team: model.Team,
        nationality: model.Nationality
        };
    }
    static toModel(dto: DriverResponseDto[]): DriverResponseModel[] {

        const drivers: DriverResponseModel[] = dto.map((item) => {
            return new DriverResponseModel(
                item.id,
                item.name,
                item.team,
                item.nationality
            );
        });
        return drivers;
    }
}