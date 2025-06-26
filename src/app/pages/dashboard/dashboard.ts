import { Component } from '@angular/core';
import { WorkQueue } from "./work-queue/work-queue";
import { PortfolioGoals } from "./portfolio-goals/portfolio-goals";
import { QuickActions } from "./quick-actions/quick-actions";
import { MarketIntelligence } from "./market-intelligence/market-intelligence";

@Component({
  selector: 'app-dashboard',
  imports: [WorkQueue, PortfolioGoals, QuickActions, MarketIntelligence],
  templateUrl: './dashboard.html'
})
export class Dashboard {

}
