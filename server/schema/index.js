import { GraphQLSchema } from 'graphql';
import query from './queries';
import mutation from './mutations';

module.exports = new GraphQLSchema({
  query,
  mutation
});
