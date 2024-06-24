import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor() { }

  private _httpClient = inject(HttpClient);

  url = "http://localhost:8080/feed";

  public findAllFeed(): Observable<any[]> {
    return this._httpClient.get<any[]>(this.url);
  }
}
