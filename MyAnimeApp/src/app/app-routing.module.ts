import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './page/card/card.component';
import { NewcardComponent } from './page/newcard/newcard.component';
import { SingleCardComponent } from './page/single-card/single-card.component';
import { AnimeComponent } from './pages/anime/anime.component';
import { DoramaComponent } from './pages/dorama/dorama.component';
import { MovieComponent } from './pages/movie/movie.component';
import { SerieComponent } from './pages/serie/serie.component';

const routes: Routes = [

{path:'home/all', component:CardComponent},
{path:'home/Pelicula', component:MovieComponent},
{path:'home/Dorama', component:DoramaComponent},
{path:'home/Anime', component:AnimeComponent},
{path:'home/Serie', component:SerieComponent},
{path:'newcard', component:NewcardComponent},
{path:'movie/:id', component:SingleCardComponent},

{ path:'', redirectTo: '/home/all', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
