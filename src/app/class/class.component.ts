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

  constructor(private classService: ClassService) {}

  ngOnInit() {
    this.getClasses();
  }

  getClasses(): void {
    this.classService.getClasses().subscribe(classes => this.classes = classes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.classService.addClass({ name } as Class)
      .subscribe(class_ => {
        this.classes.push(class_);
      });
  }

  delete(class_: Class): void {
    this.classes = this.classes.filter(h => h !== class_);
    this.classService.deleteClass(class_).subscribe();
  }
}
