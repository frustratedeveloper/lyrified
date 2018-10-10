export class lyricFeed {
    name: string;
    title: string;
    artist: string;
    lyrics: string;
    comments: string;
    heart: number;
    
    constructor(name: string, title: string, artist: string, lyrics: string, comments: string, heart?: number) {
        this.name = name;
        this.title = title;
        this.artist = artist;
        this.lyrics = lyrics;
        this.comments = comments;
        this.heart = heart || 0;
    };

    
}   
