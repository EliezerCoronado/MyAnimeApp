import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardServiceService } from 'src/app/service/card-service.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  constructor(private service:CardServiceService,
    private route: Router) { }

  ngOnInit(): void {
    this.category();
  }


  cards=[];

  file_season:any = []
  

  category(){
    this.service.getTypeList('Anime').subscribe((data:any)=>{
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
