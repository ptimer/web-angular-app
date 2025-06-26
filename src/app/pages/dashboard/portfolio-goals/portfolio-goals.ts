import { Component } from '@angular/core';
import { LossRatioProgressBar } from "./loss-ratio-progress-bar/loss-ratio-progress-bar";
import { RetentionProgressBar } from "./retention-progress-bar/retention-progress-bar";
import { ProgressBarComponent } from "./target-progress-bar/target-progress-bar";

@Component({
  selector: 'app-portfolio-goals',
  imports: [LossRatioProgressBar, RetentionProgressBar, ProgressBarComponent],
  templateUrl: './portfolio-goals.html',
  styleUrl: './portfolio-goals.css'
})
export class PortfolioGoals {

}
