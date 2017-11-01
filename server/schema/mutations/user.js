/* eslint-disable no-param-reassign, max-nested-callbacks */
import { GraphQLString, GraphQLID } from 'graphql';

const UserType = require('../types/user_type');

module.exports = {
  signup: {
    type: UserType,
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve(_, { email, password }, req) {
      // sign up user.
    }
  },
  logout: {
    type: UserType,
    resolve(_, args, req) {
      const { user } = req;

      req.logout();
      return user;
    }
  },
  login: {
    type: UserType,
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve(_, { email, password }, req) {
      // log in user.
    }
  },
  updateUser: {
    type: UserType,
    args: {
      id: { type: GraphQLID },
      email: { type: GraphQLString },
      name: { type: GraphQLString }
    },
    resolve(_, { id, email, name }) {
      return new Promise(resolve => {
        // find and update user.
      });
    }
  }
};
