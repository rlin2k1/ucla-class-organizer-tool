import { Component, OnInit } from '@angular/core';
import { Class } from '../class';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  classes: Class[] = [];

  constructor(private classService: ClassService) { }

  ngOnInit() {
    this.getClasses();
  }

  getClasses(): void {
    this.classService.getClasses()
      .subscribe(classes => this.classes = classes.slice(1, 5));
  }
}