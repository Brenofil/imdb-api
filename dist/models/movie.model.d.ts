import { Entity } from '@loopback/repository';
export declare class Movie extends Entity {
    _id: string;
    poster_link: string;
    series_title: string;
    released_year: number;
    certificate: string;
    runtime: string;
    genre: string;
    imdb_rating: number;
    overview: string;
    meta_score: number;
    director: string;
    stars: string[];
    number_of_votes: number;
    gross: string;
    constructor(data?: Partial<Movie>);
}
export interface MovieRelations {
}
export declare type MovieWithRelations = Movie & MovieRelations;
