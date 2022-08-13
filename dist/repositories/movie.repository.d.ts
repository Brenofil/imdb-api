import { DefaultCrudRepository } from '@loopback/repository';
import { ImdbDataSource } from '../datasources';
import { Movie, MovieRelations } from '../models';
export declare class MovieRepository extends DefaultCrudRepository<Movie, typeof Movie.prototype._id, MovieRelations> {
    constructor(dataSource: ImdbDataSource);
}
