import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CardServiceService } from 'src/app/service/card-service.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search:string = "";
  constructor(private service:CardServiceService,
              private route: Router,
              private activateRoute:ActivatedRoute) {


      route.events.pipe(
        filter(event => event instanceof NavigationEnd)  
      ).subscribe((event: any) => {
       // console.log(event.url);
        this.search=event.url;
  
        this.service.SearchMovie(this.search).subscribe((data:any)=>{ 
          this.file_season=data.data;
        // console.log(this.menusearch);
        });
  
      });
  



     }

  ngOnInit(): void {
  }


  cards=[];

  file_season:any = []
  

  category(){
    this.service.getTypeList('Serie').subscribe((data:any)=>{
      console.log(data);
     this.file_season=data.data
    })
  }


  type(type:string){
    this.service.getTypeList(type).subscribe((data:any)=>{
      console.log(data);
    });

  }

  singleCard(card:any){
  
    console.log(card);
    this.route.navigate(['/movie',card.file_id_file]);
  }

}
