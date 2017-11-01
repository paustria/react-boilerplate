import { GraphQLObjectType } from 'graphql';
import userMutations from './user';

const fields = Object.assign({}, userMutations);

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields
});

module.exports = mutation;
