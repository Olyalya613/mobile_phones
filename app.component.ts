import { Component, OnInit } from '@angular/core';
import { AppLogicService } from './services/app-logic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: string[] = [];

  constructor(private readonly logic: AppLogicService) {}

  ngOnInit(): void {
    this.items = this.logic.getDataAndLog();
  }
}
