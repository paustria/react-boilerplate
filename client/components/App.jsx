import React from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Register from './Register';
import RequireAuth from './RequireAuth';
import Dashboard from './Dashboard';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

const Container = props =>
  (<div>
    {props.children}
  </div>);

const App = () => (
  <ApolloProvider client={client}>
    <Container>
      <BrowserRouter>
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={RequireAuth(Dashboard)} />
          </Switch>
        </div>
      </BrowserRouter>
    </Container>
  </ApolloProvider>
);

export default App;
