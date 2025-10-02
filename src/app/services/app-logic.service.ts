import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { AnalyticsService } from './analytics.service';

@Injectable({ providedIn: 'root' })
export class AppLogicService {
  constructor(
    private readonly data: DataService,
    private readonly analytics: AnalyticsService
  ) {}

  getDataAndLog(): string[] {
    const items = this.data.getData();
    this.analytics.logEvent(`Fetched ${items.length} items`);
    return items;
  }
}
