import { Component, OnInit, Input } from '@angular/core';
import { Class } from '../class';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ClassService }  from '../class.service';


@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {

  @Input() class: Class;

  constructor(
    private route: ActivatedRoute,
    private classService: ClassService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getClass();
  }
  
  getClass(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.classService.getClass(id)
      .subscribe(class_ => this.class = class_);
  }

  goBack(): void {
    this.location.back();
  }

}
