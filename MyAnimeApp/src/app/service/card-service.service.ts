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
    return this.http.get(url);

  }


  getFileSeason(){
    const url = URL + '/list/file_season';
    return this.http.get(url);

  }


  getSeason(){
    const url = URL + '/list/season';
    return this.http.get(url);
  }


}
