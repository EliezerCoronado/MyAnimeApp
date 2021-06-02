import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router) { }
  search:any='';
  ngOnInit(): void {
  }


  type(type:string){
    console.log(type);
  }

  Search(){
    let buscar:any = document.getElementById('search') || '';
    this.search=buscar.value;
    this.route.navigate(['/search',buscar.value])

  }


}
