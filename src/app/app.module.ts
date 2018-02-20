import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { HomeComponent,SearchComponent,HeaderComponent } from './Home/home.component';
import {HeroParentComponent } from './Hero/hero-parent.component'
import {HeroChildComponent } from './Hero/hero-child.component'

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'find', redirectTo: 'search'},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'hero', component: HeroParentComponent},
  // {
  //   path: 'artist/:artistId',
  //   component: ArtistComponent,
  //   children: [
  //     {path: '', redirectTo: 'tracks', pathMatch: 'full'},
  //     {path: 'tracks', component: ArtistTrackListComponent},
  //     {path: 'albums', component: ArtistAlbumListComponent},
  //   ]
  // },
  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    HeaderComponent ,
    HeroParentComponent,
    HeroChildComponent
    
  ],
  imports: [
    BrowserModule,  
        HttpModule ,
        HttpClientModule,

    RouterModule.forRoot (routes)

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
