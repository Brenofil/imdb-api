import { LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';
export declare class ImdbDataSource extends juggler.DataSource implements LifeCycleObserver {
    static dataSourceName: string;
    static readonly defaultConfig: object;
    constructor(dsConfig?: object);
}
