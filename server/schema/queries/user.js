import UserType from '../types/user_type';

module.exports = {
  user: {
    type: UserType,
    resolve(_, args, req) {
      return req.user;
    }
  }
};
