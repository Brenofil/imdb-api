"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MovieController = class MovieController {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
    }
    async create(movie) {
        return this.movieRepository.create(movie);
    }
    async count(where) {
        return this.movieRepository.count(where);
    }
    async find(filter) {
        return this.movieRepository.find(filter);
    }
    async updateAll(movie, where) {
        return this.movieRepository.updateAll(movie, where);
    }
    async findById(id, filter) {
        return this.movieRepository.findById(id, filter);
    }
    async updateById(id, movie) {
        await this.movieRepository.updateById(id, movie);
    }
    async replaceById(id, movie) {
        await this.movieRepository.replaceById(id, movie);
    }
    async deleteById(id) {
        await this.movieRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/movies'),
    (0, rest_1.response)(200, {
        description: 'Movie model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Movie) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Movie, {
                    title: 'NewMovie',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Movie]),
    tslib_1.__metadata("design:returntype", Promise)
], MovieController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/movies/count'),
    (0, rest_1.response)(200, {
        description: 'Movie model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Movie)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MovieController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/movies'),
    (0, rest_1.response)(200, {
        description: 'Array of Movie model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Movie, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Movie)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MovieController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/movies'),
    (0, rest_1.response)(200, {
        description: 'Movie PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Movie, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Movie)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Movie, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MovieController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/movies/{id}'),
    (0, rest_1.response)(200, {
        description: 'Movie model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Movie, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('_id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Movie, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MovieController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/movies/{id}'),
    (0, rest_1.response)(204, {
        description: 'Movie PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('_id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Movie, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Movie]),
    tslib_1.__metadata("design:returntype", Promise)
], MovieController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/movies/{id}'),
    (0, rest_1.response)(204, {
        description: 'Movie PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('_id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Movie]),
    tslib_1.__metadata("design:returntype", Promise)
], MovieController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/movies/{id}'),
    (0, rest_1.response)(204, {
        description: 'Movie DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('_id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], MovieController.prototype, "deleteById", null);
MovieController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.MovieRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MovieRepository])
], MovieController);
exports.MovieController = MovieController;
//# sourceMappingURL=movie.controller.js.map