import { Entity } from '@loopback/repository';
export declare class Movie extends Entity {
    _id: string;
    Poster_link: string;
    Series_title: string;
    Released_year: number;
    Certificate: string;
    Runtime: string;
    Genre: string;
    IMDB_Rating: number;
    Overview: string;
    Meta_score: number;
    Director: string;
    Star1: string[];
    Star2: string[];
    Star3: string[];
    Star4: string[];
    No_of_Votes: number;
    Gross: string;
    constructor(data?: Partial<Movie>);
}
export interface MovieRelations {
}
export declare type MovieWithRelations = Movie & MovieRelations;
