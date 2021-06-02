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
     ) {



  

     
      }

  categories:any=[];

  file_season:any = [];
  years:any = [];
  

  category(){

    this.service.getFileSeason().subscribe((data:any)=>{
      console.log(data);
      this.file_season=data.data

    })
  }

  ngOnInit(): void {


         this.category();
         this.getCategories();
         this.getYear();


  }



  type(type:string){
    this.service.getTypeList(type).subscribe((data:any)=>{
      console.log(data);
    });

  }

  singleCard(card:any){
  
    this.route.navigate(['/movie',card.file_id_file]);
  }

  getCategories(){
    this.service.getCategory().subscribe((data:any)=>{
      this.categories=data.data;
    })
  }

  getYear(){
    this.service.getYears().subscribe((data:any)=>{
      this.years=data.data;
    })
  }

  filter(){
    var e = (document.getElementById("genero")) as HTMLSelectElement;
    var sel = e.selectedIndex;
    var opt = e.options[sel];
    var CurText = (opt).text;
    console.log(CurText);

    var t = (document.getElementById("year")) as HTMLSelectElement;
    var sel2 = t.selectedIndex;
    var opt2 = t.options[sel2];
    var CurText2 = (opt2).text;
    console.log(CurText2);


    
    if(CurText !='Genero:' && CurText2=="Año:"){
      this.searchGender(CurText);
    }else if(CurText =='Genero:' && CurText2 !="Año:"){
      this.searchYear(CurText2);
    }else if(CurText !='Genero:' && CurText2!="Año:"){
      this.searhBoth(CurText,CurText2);
    }else{
      this.category();
    }



  }


  searchGender(genero:string){

  this.service.SearchMoviegender(genero).subscribe((data:any)=>{
    this.file_season=data.data;
    console.log(data);

  })

  }

  searchYear(year:string){
    this.service.SearchMovieYear(year).subscribe((data:any)=>{
      this.file_season=data.data;
      console.log(data);
    })
  }

  searhBoth(genero:string, year:string){
    this.service.SearchMovieBoth(genero,year).subscribe((data:any)=>{
      this.file_season=data.data;
      console.log(data);
    })
  }

}
