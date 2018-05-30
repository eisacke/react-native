import React from 'react';
import { Link } from 'react-router-native';
import DeviceStorage from '../../lib/DeviceStorage';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../../actions';

class Navbar extends React.Component {

  logout = async () => {
    try {
      await DeviceStorage.deleteItem('token');
      this.props.logout();
    } catch (error) {
      console.log('Logout Error: ' + error);
    }
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <View>
        <Link to="/"><Text>Home</Text></Link>
        {!isAuthenticated && <Link to="/login"><Text>Login</Text></Link>}
        {!isAuthenticated &&<Link to="/register"><Text>Register</Text></Link>}
        {isAuthenticated &&<Text onPress={this.logout}>Logout</Text>}
      </View>
    );
  }

}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authStore.isAuthenticated
});

export default connect(
  mapStateToProps, {
    logout
  }
)(Navbar);
