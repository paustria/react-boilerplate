/* eslint-disable */
require('dotenv').config();
import express from 'express';
import path from 'path';
import expressGraphQL from 'express-graphql';
import session from 'express-session';
import models from './models';
import schema from './schema';

const app = express();
const { ENABLE_GRAPHIQL } = process.env;

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
  })
);

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: ENABLE_GRAPHIQL
  })
);

app.use(express.static('public'));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client/index.html')));

module.exports = app;
