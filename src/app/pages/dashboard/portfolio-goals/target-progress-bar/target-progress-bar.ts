import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-target-progress-bar',
  templateUrl: './target-progress-bar.html',
  styleUrls: ['./target-progress-bar.css'] // Если у вас есть специфичные стили, иначе можно удалить
})
export class ProgressBarComponent implements OnInit, OnChanges {

  @Input() currentAmount: number = 0; // Текущая сумма, например, 8.1
  @Input() targetAmount: number = 12; // Целевая сумма, например, 12

  progressPercentage: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.calculateProgress();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Вызывается при изменении входных свойств (currentAmount, targetAmount)
    if (changes['currentAmount'] || changes['targetAmount']) {
      this.calculateProgress();
    }
  }

  private calculateProgress(): void {
    if (this.targetAmount > 0) {
      this.progressPercentage = Math.round((this.currentAmount / this.targetAmount) * 100);
      // Ограничиваем процент между 0 и 100, если вдруг currentAmount > targetAmount
      this.progressPercentage = Math.min(100, Math.max(0, this.progressPercentage));
    } else {
      this.progressPercentage = 0;
    }
  }
}