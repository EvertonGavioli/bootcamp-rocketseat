import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import color from './styles/colors';
import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: navigation => ({
        headerTitle: () => <Header {...navigation} />,
        headerLeft: null,
      }),
      cardStyle: {
        backgroundColor: color.dark_secondary,
      },
    }
  )
);

export default Routes;
