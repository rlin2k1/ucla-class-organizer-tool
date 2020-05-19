import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Class } from './class';
import { CLASSES } from './mock-classes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private messageService: MessageService) { }

  getClasses(): Observable<Class[]> {
    this.messageService.add('ClassService: fetched classes');
    return of(CLASSES);
  }

  getClass(id: number): Observable<Class> {
    this.messageService.add(`ClassService: fetched class id=${id}`);
    return of(CLASSES.find(class_ => class_.id === id));
  }
}
