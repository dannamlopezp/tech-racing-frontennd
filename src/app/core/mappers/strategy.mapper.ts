import { StrategyResponseDto } from "src/app/insfraestructure/dtos/StrategyResponse.dto";
import { StrategyResponseModel } from "../models/StrategyResponse.model";

export class StrategyMapper {

    static toDto(model: StrategyResponseModel[]): StrategyResponseDto[] {
        return model.map(item => ({
            id: item.id,
            driverId: item.driverId,
            description: item.description,
            date: item.date,
            totalLaps: item.totalLaps,
            totalConsumption: item.totalConsumption,
            averagePerformance: item.averagePerformance,
            stops: item.stops
        }));
    }

    static toModel(dto: StrategyResponseDto[]): StrategyResponseModel[] {
        return dto.map(item => new StrategyResponseModel(
            item.id,
            item.driverId,
            item.description,
            new Date(item.date),
            item.totalLaps,
            item.totalConsumption,
            item.averagePerformance,
            item.stops
        ));
    }
}   