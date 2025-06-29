import { Component, inject } from '@angular/core';
import { Table } from "../../../components/table/table";
import { WorkItem } from '../../../../common/types';
import { AppService } from '../../../data/services/app';

@Component({
  selector: 'app-work-queue',
  imports: [Table],
  templateUrl: './work-queue.html',
})
export class WorkQueue {
  workQueue: WorkItem[] = [];

  appService = inject(AppService);

  constructor() {
    this.appService.getWorkQueue().subscribe((data) => {
      this.workQueue = data;
    });
  }
}
