import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../service/shared/shared_url'

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor(private http:HttpClient) { }

  getCategory(){
    const url = URL + '/list/category';
    console.log(url);
    return this.http.get(url);

  }


  getFileSeason(){
    const url = URL + '/list/file_season';
    console.log(url);
    return this.http.get(url);

  }

}
