import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor(private httpClient: HttpClient) { }

  public getCardInfo() : Observable<any> {
    let result = this.httpClient.get('https://lookup.binlist.net/47483640')
    return result
  }
}
