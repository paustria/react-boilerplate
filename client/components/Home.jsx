import React from 'react';
import { NavLink } from 'react-router-dom';
import { graphql } from 'react-apollo';

import query from '../queries/CurrentUser';

type Props = {
  user: Object,
  isFetching: boolean,
  history: Object
};

class Home extends React.Component {
  props: Props;

  renderNav = () => {
    if (this.props.user) {
      return <NavLink to="dashboard">Dashboard</NavLink>;
    }
    return <NavLink to="login">Login / Signup</NavLink>;
  };

  render() {
    return (
      <div>
        This is React Home.
      </div>
    );
  }
}

const mapDataToProps = result => ({
  user: 'test'
});

const withData = graphql(query, {
  props: mapDataToProps
});

export default withData(Home);
