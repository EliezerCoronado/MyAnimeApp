import { Component, OnInit } from '@angular/core';
import { CardServiceService } from 'src/app/service/card-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private service:CardServiceService ) { }

  cards=['../../../assets/img/prueba.jpg',
         '../../../assets/img/2.jpg' ,
         '../../../assets/img/3.jpg',
         '../../../assets/img/4.jpg',
         '../../../assets/img/2.jpg' ,
         '../../../assets/img/3.jpg',
         '../../../assets/img/4.jpg',
         '../../../assets/img/2.jpg' ,
         '../../../assets/img/3.jpg',
         '../../../assets/img/4.jpg'];


  category(){
    this.service.getCategory().subscribe(data=>{
      console.log(data);
    })
  }

  ngOnInit(): void {
    this.category();
  }

}
