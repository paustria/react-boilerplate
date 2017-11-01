import React from 'react';
import { graphql, compose } from 'react-apollo';

import mutation from '../mutations/Login';
import query from '../queries/CurrentUser';

type Props = {
  data: Object,
  history: Object,
  onLogin: Function
};

class Login extends React.Component {
  props: Props;

  componentWillUpdate = (nextProps) => {
    if (!this.props.data.user && nextProps.data.user) {
      this.props.history.push('/dashboard');
    }
  };

  render() {
    return (
      <div className="login-container">
        <h1>Login</h1>
      </div>
    );
  }
}

const withData = graphql(query);

const mapActionsToProps = ({ mutate }) => ({
  onLogin: (email, password) =>
    mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    })
});

const withActions = graphql(mutation, {
  props: mapActionsToProps
});

export default compose(withData, withActions)(Login);
