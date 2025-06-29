import { Component } from '@angular/core';
import { WorkQueue } from "./work-queue/work-queue";
import { PortfolioGoals } from "./portfolio-goals/portfolio-goals";
import { QuickActions } from "./quick-actions/quick-actions";
import { MarketIntelligence } from "./market-intelligence/market-intelligence";
import { MyAccounts } from "./my-accounts/my-accounts";

@Component({
  selector: 'app-dashboard',
  imports: [PortfolioGoals, QuickActions, MarketIntelligence, MyAccounts, WorkQueue],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  
}
