import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { StrategyResponseModel } from 'src/app/core/models/StrategyResponse.model';
import { StrategyRepository } from 'src/app/core/repositories/strategy.repository';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [ MatIconModule, CommonModule],
  standalone: true
})
export class CardComponent {
  @Input() Strategy: StrategyResponseModel[] = [];  

  constructor(private strategyRepository: StrategyRepository) {

   }

 
}
