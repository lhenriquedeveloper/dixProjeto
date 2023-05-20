import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeilaoserviceService {
  constructor(
    private httpClient: HttpClient,
  ) { 
  }
  //Get the standings of the Serie B
  getLeiloes(): Observable<any> {
    return this.httpClient.get<any>(`https://bis365.com.br/bid365/api/v1/auctions`,
      {
        headers: {
          app: `23a20977-9368-4f13-a008-d556163fa8df`,
        },
      }
    )
  }

  getLeilaoById(id:string): Observable<any> {
    return this.httpClient.get<any>(`https://bis365.com.br/bid365/api/v1/auctions/${id}`,
    {
      headers: {
        app: `23a20977-9368-4f13-a008-d556163fa8df`,
      },
    }
    )
  }
}