import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
       apiKey: "AIzaSyBGjJYcVbucbcVZh-mHN0AW3yq1LElHcLI",
       authDomain: "auth-fac7f.firebaseapp.com",
       databaseURL: "https://auth-fac7f.firebaseio.com",
       storageBucket: "auth-fac7f.appspot.com",
       messagingSenderId: "331224399686"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          this.setState({ loggedIn: true });
      } else {
          this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {

    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.logoutButtonStyle} >
            <Button onPress={() => firebase.auth().signOut()}>
              Log out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;

    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  logoutButtonStyle: {
    flexDirection: 'row'
  }
}

export default App;
