import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardServiceService } from 'src/app/service/card-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private service:CardServiceService,
              private route: Router
     ) { }

  cards=[];

  file_season:any = []
  

  category(){
    this.service.getFileSeason().subscribe((data:any)=>{
      console.log(data);
      this.file_season=data.data
    })
  }

  ngOnInit(): void {
    this.category();
  }

  singleCard(card:any){
  
    console.log(card);
    this.route.navigate(['/movie',card.file_id_file]);
  }

}
