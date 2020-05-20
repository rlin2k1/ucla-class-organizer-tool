import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Class } from './class';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private classesUrl = 'api/classes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.classesUrl)
      .pipe(
        tap(_ => this.log('fetched classes')),
        catchError(this.handleError<Class[]>('getClasses', []))
      );
  }

  /** GET class by id. Will 404 if id not found */
  getClass(id: number): Observable<Class> {
    const url = `${this.classesUrl}/${id}`;
    return this.http.get<Class>(url).pipe(
      tap(_ => this.log(`fetched class id=${id}`)),
      catchError(this.handleError<Class>(`getClass id=${id}`))
    );
  }

  /** PUT: update the class on the server */
  updateClass(class_: Class): Observable<any> {
    return this.http.put(this.classesUrl, class_, this.httpOptions).pipe(
      tap(_ => this.log(`updated class id=${class_.id}`)),
      catchError(this.handleError<any>('updateClass'))
    );
  }

  /** POST: add a new class to the server */
  addClass(class_: Class): Observable<Class> {
    return this.http.post<Class>(this.classesUrl, class_, this.httpOptions).pipe(
      tap((newClass: Class) => this.log(`added class w/ id=${newClass.id}`)),
      catchError(this.handleError<Class>('addClass'))
    );
  }

  /** DELETE: delete the class from the server */
  deleteClass(class_: Class | number): Observable<Class> {
    const id = typeof class_ === 'number' ? class_ : class_.id;
    const url = `${this.classesUrl}/${id}`;

    return this.http.delete<Class>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted class id=${id}`)),
      catchError(this.handleError<Class>('deleteClass'))
    );
  }

  /* GET classes whose name contains search term */
  searchClasses(term: string): Observable<Class[]> {
    if (!term.trim()) {
      // if not search term, return empty class array.
      return of([]);
    }
    return this.http.get<Class[]>(`${this.classesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found classes matching "${term}"`) :
        this.log(`no classes matching "${term}"`)),
      catchError(this.handleError<Class[]>('searchClasses', []))
    );
  }

  /** Log a ClassService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ClassService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
