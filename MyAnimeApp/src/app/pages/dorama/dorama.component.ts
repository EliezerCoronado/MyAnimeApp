import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardServiceService } from 'src/app/service/card-service.service';

@Component({
  selector: 'app-dorama',
  templateUrl: './dorama.component.html',
  styleUrls: ['./dorama.component.css']
})
export class DoramaComponent implements OnInit {

  constructor(private service:CardServiceService,
    private route: Router) { }

  ngOnInit(): void {
    this.category()
  }

  cards=[];

  file_season:any = []
  

  category(){
    this.service.getTypeList('Dorama').subscribe((data:any)=>{
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