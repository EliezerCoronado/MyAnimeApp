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
    this.category();
    this.getCategories();
    this.getYear();
  }

  cards=[];

  file_season:any = [];

  categories:any=[];

  years:any = [];

  

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

  getCategories(){
    this.service.getCategoriesbytype('3').subscribe((data:any)=>{
      this.categories=data.data;
    })
  }

  getYear(){
    this.service.getCategoriesbyyear('3').subscribe((data:any)=>{
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

  this.service.SearchMoviegenderbytype(genero,'3').subscribe((data:any)=>{
    this.file_season=data.data;
    console.log(data);

  })

  }

  searchYear(year:string){
    this.service.SearchMovieYearbytype(year,'3').subscribe((data:any)=>{
      this.file_season=data.data;
      console.log(data);
    })
  }

  searhBoth(genero:string, year:string){
    this.service.SearchMovieBothbytype(genero,year,'3').subscribe((data:any)=>{
      this.file_season=data.data;
      console.log(data);
    })
  }



}
