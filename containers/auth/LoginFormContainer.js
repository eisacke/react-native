import React from 'react';
import LoginForm from '../../components/auth/LoginForm';
import { login, fetchCurrentUser, newCredentials } from '../../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { View } from 'react-native';
import DeviceStorage from '../../lib/DeviceStorage';

class LoginFormContainer extends React.Component {

  state = {
    redirect: false
  }

  componentDidMount = async () => {
    this.props.newCredentials();
  }

  submit = (credentials) => {
    return this.props.login(credentials)
      .then(() => {
        // Auth.setToken(this.props.token);
        console.log('LOGGED IN!');
        DeviceStorage.saveItem('token', this.props.token);
        this.setState({ redirect: true });
      })
      .catch(() => {
        console.log('THERE WAS AN ERROR');
        // TODO: potentially implement these errors at a later date...
        // throw new SubmissionError(this.props.errors);
      });
  }

  render() {
    return (
      <View>
        {
          this.state.redirect ?
            <Redirect to="/" /> :
            <LoginForm
              onSubmit={this.submit}
              loading={this.props.loading}
              errors={this.props.errors}
            />
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.authStore.loading,
  errors: state.authStore.errors,
  token: state.authStore.token,
  userId: state.authStore.userId
});

export default connect(
  mapStateToProps, {
    login,
    fetchCurrentUser,
    newCredentials
  }
)(LoginFormContainer);
