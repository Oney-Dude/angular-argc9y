import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-location-alerts',
  templateUrl: './location-alerts.component.html',
  styleUrls: ['./location-alerts.component.css']
})
export class LocationAlertsComponent implements OnInit {
  @Input() location;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}