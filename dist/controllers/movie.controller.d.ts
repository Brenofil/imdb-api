import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Movie } from '../models';
import { MovieRepository } from '../repositories';
export declare class MovieController {
    movieRepository: MovieRepository;
    constructor(movieRepository: MovieRepository);
    create(movie: Movie): Promise<Movie>;
    count(where?: Where<Movie>): Promise<Count>;
    find(filter?: Filter<Movie>): Promise<Movie[]>;
    updateAll(movie: Movie, where?: Where<Movie>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Movie>): Promise<Movie>;
    updateById(id: string, movie: Movie): Promise<void>;
    replaceById(id: string, movie: Movie): Promise<void>;
    deleteById(id: string): Promise<void>;
}
