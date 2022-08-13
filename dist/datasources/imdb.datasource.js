"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImdbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const sensitive_data_1 = require("../sensitive-data");
const config = {
    name: "imdb",
    connector: sensitive_data_1.CONST.MONGODB_CONNECTOR,
    url: sensitive_data_1.CONST.MONGODB_CONNECTION_STR,
    host: sensitive_data_1.CONST.MONGODB_HOST,
    port: sensitive_data_1.CONST.MONGODB_PORT,
    user: sensitive_data_1.CONST.MONGODB_USER,
    password: sensitive_data_1.CONST.MONGODB_PW,
    database: sensitive_data_1.CONST.MONGODB_DATABASE,
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let ImdbDataSource = class ImdbDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
ImdbDataSource.dataSourceName = "imdb";
ImdbDataSource.defaultConfig = config;
ImdbDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.imdb', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], ImdbDataSource);
exports.ImdbDataSource = ImdbDataSource;
//# sourceMappingURL=imdb.datasource.js.map