import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, publishReplay, refCount } from 'rxjs/operators';

export interface Config {
  componentType: string, 
  show: Boolean
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  configs: Observable<Config[]>;

  constructor(private httpClient: HttpClient) { }

  url="https://vast-shore-74260.herokuapp.com/banks?city=";

  public sendGetRequest(value): Observable<any>{
    if (!this.configs) {
    return this.httpClient.get(this.url+value).pipe(publishReplay(1),refCount());
  }
  return this.configs;
}
clearCache() {
  this.configs = null;
}
}
