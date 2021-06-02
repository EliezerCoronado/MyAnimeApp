import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL, URLFILTER } from '../service/shared/shared_url'

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

  getIndividualMovie(id_movie:string){
    const url = URLFILTER + '/movie/'+id_movie;
    
    return this.http.get(url);

  }

  getTypeList(type:string){


    
    const url = URLFILTER + '/get-lists/'+type
    return this.http.get(url);

  }

  SearchMovie(search:string){
    let str2 =search; 
    let splitted2 = str2.split("/", 3);
   // console.log(splitted2); 
    const url = URLFILTER + '/search-menu/'+splitted2[2];
    return this.http.get(url);

  }
  


}
