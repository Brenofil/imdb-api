import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { ImdbDataSource } from '../datasources';
import { Movie, MovieRelations } from '../models';

export class MovieRepository extends DefaultCrudRepository<Movie, typeof Movie.prototype._id, MovieRelations> {
  constructor(
    @inject('datasources.imdb-collection') dataSource: ImdbDataSource,
  ) {
    super(Movie, dataSource);
  }
}
