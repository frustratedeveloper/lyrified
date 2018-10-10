import { Component } from '@angular/core';
import { lyricFeed } from './lyric-feed/lyric-feed.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lyricPost: lyricFeed[];

  constructor() {
    this.lyricPost = [
      
    ];
  }

  addLyrics(name: HTMLInputElement, title: HTMLInputElement, artist: HTMLInputElement, lyrics: HTMLInputElement, comments: HTMLInputElement): boolean {
    if(name.value && title.value && artist.value && lyrics.value && comments.value !== "") {
      this.lyricPost.push(new lyricFeed(name.value, title.value, artist.value, lyrics.value, comments.value));
      name.value = "";
      title.value = "";
      artist.value = "";
      lyrics.value = "";
      comments.value = "";
      return false;
    } else {
      alert("Something is missing!");
      return false;
    };
  }
}
