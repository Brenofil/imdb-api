import { Entity, model, property } from '@loopback/repository';

@model()
export class Movie extends Entity {
  @property({
    type: 'string',
    id: true,
    mongodb: { datatype: 'ObjectId' },
  })
  _id: string;

  @property({
    type: 'string',
    required: true,
  })
  poster_link: string;

  @property({
    type: 'string',
    required: true,
  })
  series_title: string;

  @property({
    type: 'number',
    required: true,
  })
  released_year: number;

  @property({
    type: 'string',
    required: true,
  })
  certificate: string;

  @property({
    type: 'string',
    required: true,
  })
  runtime: string;

  @property({
    type: 'string',
    required: true,
  })
  genre: string;

  @property({
    type: 'number',
    required: true,
  })
  imdb_rating: number;

  @property({
    type: 'string',
    required: true,
  })
  overview: string;

  @property({
    type: 'number',
    required: true,
  })
  meta_score: number;

  @property({
    type: 'string',
    required: true,
  })
  director: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  stars: string[];

  @property({
    type: 'number',
    required: true,
  })
  number_of_votes: number;

  @property({
    type: 'string',
    required: true,
  })
  gross: string;


  constructor(data?: Partial<Movie>) {
    super(data);
  }
}

export interface MovieRelations {
  // describe navigational properties here
}

export type MovieWithRelations = Movie & MovieRelations;
