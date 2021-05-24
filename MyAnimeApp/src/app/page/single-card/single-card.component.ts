import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CardServiceService } from 'src/app/service/card-service.service';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {

  movie:any={}
  subtitles="";
  categories="";
  constructor(private service:CardServiceService,
              private activateRoute: ActivatedRoute,
              private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params.id;
    this.service.getIndividualMovie(id).subscribe((data:any)=>{ 
      this.movie=data.data[0];
      console.log(this.movie);
      this.getSubtitles(this.movie.subtitles);
      this.getCategory(this.movie.category);
    });
  
  }

  getSubtitles(subtitles_array:any){
    let sub='';
    console.log(subtitles_array)

    subtitles_array.forEach((val:any, key:any, arr:any) => {
    
     
      if (Object.is(arr.length - 1, key)) {
        // execute last item logic
        sub=sub+val.subtitle; 
      }else{
        sub=sub+val.subtitle+', ';

      }
    
    });

    this.subtitles=sub;

    

  }


  getCategory(categories_array:any){
    let category='';
    console.log(categories_array)

    categories_array.forEach((val:any, key:any, arr:any) => {
    
     
      if (Object.is(arr.length - 1, key)) {
        // execute last item logic
        category=category+val.name_category; 
      }else{
        category=category+val.name_category+', ';

      }
    
    });

    this.categories=category;

    

  }


  getUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer);
  }

}
