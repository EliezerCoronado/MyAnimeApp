import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './page/card/card.component';
import { NewcardComponent } from './page/newcard/newcard.component';
import { SingleCardComponent } from './page/single-card/single-card.component';

const routes: Routes = [

{path:'card', component:CardComponent},
{path:'newcard', component:NewcardComponent},
{path:'movie/:id', component:SingleCardComponent},

{ path:'', redirectTo: '/card', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
