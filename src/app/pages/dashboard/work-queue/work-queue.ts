import { Component } from '@angular/core';
import { Table } from "../../../components/table/table";
import { HttpClient } from '@angular/common/http';

interface WorkItem {
  originator: string;
  client: string;
  line: string;
  type: string;
  status: string;
  created: string;
}

@Component({
  selector: 'app-work-queue',
  imports: [Table],
  templateUrl: './work-queue.html',
})
export class WorkQueue {
  workQueue: WorkItem[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<WorkItem[]>('assets/mock-data/mock-work-queue.json').subscribe(data => {
      this.workQueue = data;
    });
  }
}
