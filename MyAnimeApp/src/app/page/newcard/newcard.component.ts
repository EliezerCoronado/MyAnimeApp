import { Component, OnInit } from '@angular/core';
import { CardServiceService } from 'src/app/service/card-service.service';

@Component({
  selector: 'app-newcard',
  templateUrl: './newcard.component.html',
  styleUrls: ['./newcard.component.css']
})
export class NewcardComponent implements OnInit {

  constructor(private server:CardServiceService) { }
  
  Category:any=[];
  Season:any= [];

  ngOnInit(): void {
    this.server.getCategory().subscribe((data:any)=>{
      this.Category = data.data
      console.log(this.Category);
    });

    this.server.getSeason().subscribe((data:any)=>{
      this.Season = data.data;
      console.log(this.Season);
    })

  }


  

}
