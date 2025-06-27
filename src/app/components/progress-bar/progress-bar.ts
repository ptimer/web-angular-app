import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.html',
  styleUrls: ['./progress-bar.css']
})
export class ProgressBarComponent implements OnInit, OnChanges {

  @Input() currentAmount: number = 0;
  @Input() targetAmount: number = 12;

  progressPercentage: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.calculateProgress();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentAmount'] || changes['targetAmount']) {
      this.calculateProgress();
    }
  }

  private calculateProgress(): void {
    if (this.targetAmount > 0) {
      this.progressPercentage = Math.round((this.currentAmount / this.targetAmount) * 100);
      this.progressPercentage = Math.min(100, Math.max(0, this.progressPercentage));
    } else {
      this.progressPercentage = 0;
    }
  }
}