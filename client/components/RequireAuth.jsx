/* eslint-disable */
import React from 'react';
import { graphql } from 'react-apollo';

import currentUser from '../queries/CurrentUser';

export default WrappedComponent => {
  class RequireAuth extends React.Component {
    componentWillUpdate(nextProps) {
      if (!nextProps.data.user && !nextProps.data.loading) {
        this.props.history.push('/login');
      }
    }

    render() {
      if (!this.props || !this.props.data || !this.props.data.user) return <div>loading</div>;
      return (
        <WrappedComponent currentUser={this.props.data.user} {...this.props} />
      );
    }
  }

  const withData = graphql(currentUser);

  return withData(RequireAuth);
};
