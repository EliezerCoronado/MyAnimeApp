import { Component, OnInit } from '@angular/core';
import { CardServiceService } from 'src/app/service/card-service.service';

@Component({
  selector: 'app-newcard',
  templateUrl: './newcard.component.html',
  styleUrls: ['./newcard.component.css']
})
export class NewcardComponent implements OnInit {

  constructor(private server:CardServiceService) { }
  
  category:any=[];

  ngOnInit(): void {
    this.server.getCategory().subscribe((data:any)=>{
      this.category=data.data
      console.log(this.category);
    });
  }

}
