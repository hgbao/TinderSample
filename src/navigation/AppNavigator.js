import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import LoadingView from '@components/LoadingView';
import { AppColors } from '@theme';

const AppNavigator = createMaterialTopTabNavigator(
  {
    Explore: {
      screen: LoadingView,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Image source={require('@images/ChatIcon.png')} style={{ tintColor }} />;
        }
      }
    },
    FavoriteView: {
      screen: LoadingView,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Image source={require('@images/FavoriteIcon.png')} style={{ tintColor }} />;
        }
      }
    }
  },
  {
    initialRouteName: 'Explore',
    swipeEnabled: false,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: AppColors.active,
      inactiveTintColor: AppColors.inactive,
      activeBackgroundColor: AppColors.background,
      inactiveBackgroundColor: AppColors.background,
      style: {
        height: 54,
        borderWidth: 0,
        backgroundColor: AppColors.background,
        elevation: 4
      },
      indicatorStyle: {
        backgroundColor: AppColors.active
      }
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () => (
  <SafeAreaView style={{ flex: 1 }}>
    <AppContainer />
  </SafeAreaView>
);
