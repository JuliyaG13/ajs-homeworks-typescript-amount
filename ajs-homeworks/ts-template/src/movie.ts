class Movie {
    private title: string;
    private year: number;
    private country: string;
    private tagline: string;
    private genres: string[];
    private duration: number;

    constructor(title: string, year: number, country: string, tagline: string, genres: string[], duration: number) {
        this.title = title;
        this.year = year;
        this.country = country;
        this.tagline = tagline;
        this.genres = genres;
        this.duration = duration;
    }

    public getInfo(): string {
        return `${this.title}. год: ${this.year}, страна: ${this.country}, слоган: ${this.tagline}, жанр: ${this.genres.join(', ')}, время: ${this.duration} минут.`;
    }
}

export { Movie };