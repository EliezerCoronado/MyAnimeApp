import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardServiceService } from 'src/app/service/card-service.service';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {

  movie:any={}
  constructor(private service:CardServiceService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params.id;
    this.service.getIndividualMovie(id).subscribe((data:any)=>{ 
      this.movie=data.data;
      console.log(data);
    })
  }

}
