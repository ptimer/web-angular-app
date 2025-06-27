import { Component } from '@angular/core';
import { ArrowLink } from '../../../components/arrow-link/arrow-link';
import { ProgressBarComponent } from "../../../components/progress-bar/progress-bar";

@Component({
  selector: 'app-perfomance-metrics',
  imports: [ArrowLink, ProgressBarComponent],
  templateUrl: './perfomance-metrics.html',
  styleUrl: './perfomance-metrics.css'
})
export class PerfomanceMetrics {

}
