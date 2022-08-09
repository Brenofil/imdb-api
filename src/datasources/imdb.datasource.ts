import { inject, lifeCycleObserver, LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';
import { CONST } from '../sensitive-data';

const config = {
  name: 'imdb',
  connector: 'mongodb',
  url: CONST.MONGODB_CONNECTION_STR,
  host: CONST.MONGODB_HOST,
  port: CONST.MONGODB_PORT,
  user: CONST.MONGODB_USER,
  password: CONST.MONGODB_PW,
  database: 'Movie_Collection',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ImdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'imdb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.imdb', { optional: true })
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
