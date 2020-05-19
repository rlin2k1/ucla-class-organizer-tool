import { Component, OnInit } from '@angular/core';
import { Class } from '../class'

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  class : Class = {
    id: 1,
    name: 'CS 31'
  };

  constructor() { }

  ngOnInit(): void {
  }
}
