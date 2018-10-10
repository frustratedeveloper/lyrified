import { Component, OnInit, Input } from '@angular/core';
import { lyricFeed } from './lyric-feed.model';

@Component({
  selector: 'app-lyric-feed',
  templateUrl: './lyric-feed.component.html',
  styleUrls: ['./lyric-feed.component.css']
})
export class LyricFeedComponent implements OnInit {
@Input() lyricSection: lyricFeed;


  constructor() {

  }

  ngOnInit() {
  }

}
