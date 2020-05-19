import { Component, OnInit } from '@angular/core';

import { Class } from '../class'
import { ClassService } from '../class.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  classes: Class[];
  selectedClass: Class;

  constructor(private classService: ClassService, private messageService: MessageService) {}

  ngOnInit() {
    this.getClasses();
  }

  getClasses(): void {
    this.classService.getClasses().subscribe(classes => this.classes = classes);
  }

  onSelect(class_: Class): void {
    this.selectedClass = class_;
    this.messageService.add(`ClassService: Selected class id=${class_.id}`);
  }
}
