
import React from 'react';
import MainScreen from './screens/MainScreen';
import DetailsScreen from './screens/DetailsScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

export default function App() {
  return (
    <AppContainer />
  );
}

const appStackNavigator = createStackNavigator(
  {
    Home: {
      screen: MainScreen,
      navigationOptions: { headerShown: false }
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: "Home"
  }
)

const AppContainer = createAppContainer(appStackNavigator);