import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';
import { GithubService } from './services/github.service';
import { DetailsComponent } from './components/details/details.component';
import { appRoutingModule } from './app.routing';
import { SongsComponent } from './components/songs/songs.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    DetailsComponent,
    SongsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    appRoutingModule
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
