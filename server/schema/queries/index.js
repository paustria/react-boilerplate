import { GraphQLObjectType } from 'graphql';
import userQuery from './user';

const fields = Object.assign({}, userQuery);

const queries = new GraphQLObjectType({
  name: 'Query',
  fields
});

module.exports = queries;
