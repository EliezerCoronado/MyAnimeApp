import { Component, OnInit } from '@angular/core';
import { CardServiceService } from 'src/app/service/card-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private service:CardServiceService ) { }

  cards=['../../../assets/img/Pelicula/IronMan/IronMan1/Iron_Man_1_Portada.png',
         '../../../assets/img/2.jpg' ,
         '../../../assets/img/3.jpg',
         '../../../assets/img/4.jpg',
         '../../../assets/img/2.jpg' ,
         '../../../assets/img/3.jpg',
         '../../../assets/img/4.jpg',
         '../../../assets/img/2.jpg' ,
         '../../../assets/img/3.jpg',
         '../../../assets/img/4.jpg'];

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

}
