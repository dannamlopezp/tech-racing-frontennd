export class StrategyResponseModel {
    constructor(
        public id: number,
        public driverId: number,
        public description: number,
        public date: Date,
        public totalLaps: number,
        public totalConsumption: number,
        public averagePerformance: number,
        public stops: number
    ){}
}
   