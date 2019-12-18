import React, { Component } from 'react';
import {
    AsyncStorage
} from 'react-native'
import {
    ProfileScreens,
    CreateEmployee,
    ListEmployee
} from '../../screens';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BottomBar from './BottomBar';

const AppNavigator = createStackNavigator(
    {

        Home: {
            screen: BottomBar,
            navigationOptions: {
                header: null
            }
        },
        Profile: {
            screen: ProfileScreens,
            navigationOptions: {
                header: null
            }
        },
        CreateEmployee: {
            screen: CreateEmployee,
            navigationOptions: {
                header: null
            }
        },
        ListEmployee: {
            screen: ListEmployee,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(AppNavigator);