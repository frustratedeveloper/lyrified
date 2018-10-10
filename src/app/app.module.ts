import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LyricFeedComponent } from './lyric-feed/lyric-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    LyricFeedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
