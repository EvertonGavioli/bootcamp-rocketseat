import {createStackNavigator} from 'react-navigation';

import Main from './pages/main';

export default createStackNavigator(
  {
    Main,
  },
  {
    navigationOptions: {
      headerTitleStyle: {
        textAlign: 'center',
        width: '100%',
      },
      headerStyle: {
        backgroundColor: '#DA552F',
      },
      headerTintColor: '#FFF',
    },
  },
);
