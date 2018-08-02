import React from 'react';

import AuthUserContext from './AuthUserContext';
import { firebase } from '../../firebase';

const withAuthentication = (Component) =>
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
      });
    }

    render() {
      const { authUser } = this.state;
      const props = this.props

      return (
        <AuthUserContext.Provider value={authUser}>
          <Component { ...props } />
        </AuthUserContext.Provider>
      );
    }
  }

export default withAuthentication;