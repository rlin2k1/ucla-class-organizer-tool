import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Class } from './class';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const classes = [
      { id: 32, name: 'CS 32: Data Structures and Algorithms' },
      { id: 111, name: 'CS 111: Operating Systems' },
      { id: 130, name: 'CS 130: Software Engineering' },
      { id: 131, name: 'CS 131: Programming Languages' },
      { id: 134, name: 'CS 134: Distributed Systems' },
      { id: 144, name: 'CS 144: Web Applications' },
      { id: 146, name: 'CS 146: Machine Learning' },
      { id: 161, name: 'CS 161: Artificial Intelligence' },
      { id: 180, name: 'CS 180: Algorithms and Complexity' },
      { id: 188, name: 'CS 188: Computer Vision' }
    ];
    return {classes};
  }

  // Overrides the genId method to ensure that a hclass always has an id.
  // If the classes array is empty,
  // the method below returns the initial number (1).
  // if the classes array is not empty, the method below returns the highest
  // class id + 1.
  genId(classes: Class[]): number {
    return classes.length > 0 ? Math.max(...classes.map(class_ => class_.id)) + 1 : 1;
  }
}