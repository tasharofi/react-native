import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import ScarletScreen from '../components/ScarletScreen';
import GrayScreen from '../components/GrayScreen';

import BlueScreen from '../components/BlueScreen';
import MaizeScreen from '../components/MaizeScreen';

import BlackScreen from '../components/BlackScreen';
import GoldScreen from '../components/GoldScreen';

import ModalScreen from '../components/ModalScreen';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

const App = () => {
  return (
    <Router>
      <Scene key="root">

        <Scene key="tabbar"
          tabs
          tabBarStyle={{ backgroundColor: '#FFF' }}
        >
          <Scene key="osu" title="OSU" icon={TabIcon}>
            <Scene key="scarlet"
              component={ScarletScreen}
              title="Scarlet"
              initial
            />
            <Scene
              key="gray"
              component={GrayScreen}
              title="Gray"
            />
          </Scene>

          <Scene key="um" title="UM" icon={TabIcon}>
            <Scene key="blue"
              component={BlueScreen}
              title="Blue"
              initial
            />
            <Scene
              key="maize"
              component={MaizeScreen}
              title="Maize"
            />
          </Scene>

          <Scene key="vu" title="VUE" icon={TabIcon}>
            <Scene key="gold"
              component={GoldScreen}
              title="Gold"
              initial
            />
            <Scene
              key="black"
              component={BlackScreen}
              title="Black"
            />
          </Scene>

        </Scene>

        <Scene
          key="modal"
          component={ModalScreen}
          title="Modal"
          direction="vertical"
          hideNavBar
        />
      </Scene>
    </Router>
  );
}

export default App;
