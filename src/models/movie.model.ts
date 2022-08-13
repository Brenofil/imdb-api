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
  Poster_link: string;

  @property({
    type: 'string',
    required: true,
  })
  Series_title: string;

  @property({
    type: 'number',
    required: true,
  })
  Released_year: number;

  @property({
    type: 'string',
    required: true,
  })
  Certificate: string;

  @property({
    type: 'string',
    required: true,
  })
  Runtime: string;

  @property({
    type: 'string',
    required: true,
  })
  Genre: string;

  @property({
    type: 'number',
    required: true,
  })
  IMDB_Rating: number;

  @property({
    type: 'string',
    required: true,
  })
  Overview: string;

  @property({
    type: 'number',
    required: true,
  })
  Meta_score: number;

  @property({
    type: 'string',
    required: true,
  })
  Director: string;

  @property({
    type: 'string',
    required: true,
  })
  Star1: string[];

  @property({
    type: 'string',
    required: true,
  })
  Star2: string[];

  @property({
    type: 'string',
    required: true,
  })
  Star3: string[];

  @property({
    type: 'string',
    required: true,
  })
  Star4: string[];

  @property({
    type: 'number',
    required: true,
  })
  No_of_Votes: number;

  @property({
    type: 'string',
    required: true,
  })
  Gross: string;


  constructor(data?: Partial<Movie>) {
    super(data);
  }
}

export interface MovieRelations {
  // describe navigational properties here
}

export type MovieWithRelations = Movie & MovieRelations;
