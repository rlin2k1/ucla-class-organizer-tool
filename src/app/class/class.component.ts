import { Component, OnInit } from '@angular/core';
import { Class } from '../class'
import { CLASSES} from '../mock-classes';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  classes = CLASSES;
  selectedClass: Class;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(course: Class): void {
    this.selectedClass = course;
  }
}
