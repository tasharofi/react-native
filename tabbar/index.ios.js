/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

import FacebookTabBar from './FacebookTabBar';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

export default class tabbar extends Component {
  render() {
    return (
      <ScrollableTabView
        style={{marginTop: 20, }}
        initialPage={1}
        renderTabBar={() => <FacebookTabBar />}
        tabBarPosition='bottom'
      >
        <ScrollView tabLabel="ios-paper" style={styles.tabView}>
          <View style={styles.card}>
            <Text>test</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="ios-people" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Friends</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Messenger</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="ios-notifications" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Notifications</Text>
          </View>
        </ScrollView>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

AppRegistry.registerComponent('tabbar', () => tabbar);
