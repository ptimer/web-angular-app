import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { WorkItem } from '../../../common/types';
import { BASE_API_URL } from '../../../common/constants';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  http = inject(HttpClient);

  getWorkQueue() {
    return this.http.get<WorkItem[]>(`${BASE_API_URL}/mock-work-queue.json`);
  }
}
