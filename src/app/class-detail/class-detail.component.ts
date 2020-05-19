import { Component, OnInit, Input } from '@angular/core';
import { Class } from '../class';


@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {

  @Input() class: Class;

  constructor() { }

  ngOnInit(): void {
  }

}
