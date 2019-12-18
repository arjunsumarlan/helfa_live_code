import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import {
    Image,
    Easing,
    Animated,
    Platform,
    Keyboard
} from 'react-native';
import {
    HomeScreens,
    ProfileScreens
} from "../../screens";

class TabBarComponent extends React.Component {
    state = {
        visible: true
    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            this.keyboardEventListeners = [
                Keyboard.addListener('keyboardDidShow', this.visible(false)),
                Keyboard.addListener('keyboardDidHide', this.visible(true))
            ];
        }
    }

    componentWillUnmount() {
        this.keyboardEventListeners && this.keyboardEventListeners.forEach((eventListener) => eventListener.remove());
    }

    visible = visible => () => this.setState({ visible });

    render() {
        if (!this.state.visible) {
            return null;
        } else {
            return (
                <BottomTabBar {...this.props} />
            );
        }
    }
}

const icon_size = 25;

export default BottomBar = createBottomTabNavigator(
    {
        Home: {
            screen: createStackNavigator({
                Home: {
                    screen: HomeScreens,
                    navigationOptions: {
                        header: null
                    }
                }
            }, {
                transitionConfig: () => {
                    return {
                        transitionSpec: {
                            duration: 500,
                            easing: Easing.out(Easing.poly(4)),
                            timing: Animated.timing,
                        },
                        screenInterpolator: (sceneProps) => {
                            const { layout, position, scene } = sceneProps;
                            const sceneIndex = scene.index;
                            const width = layout.initWidth;
                            const translateX = position.interpolate({
                                inputRange: [sceneIndex - 1, sceneIndex, sceneIndex + 1],
                                outputRange: [width, 0, 0]
                            })
                            return { transform: [{ translateX }] }
                        },
                    }
                },
            }),
            navigationOptions: {
                showLabel: true,
                tabBarIcon: ({ tintColor }) => {
                    if (tintColor === '#29C1C1') {
                        return (
                            <Image
                                source={require('../../assets/images/home-active.png')}
                                style={{ width: icon_size, height: icon_size }}
                                resizeMethod='resize'
                                resizeMode='contain'
                            />
                        )
                    } else {
                        return (
                            <Image
                                source={require('../../assets/images/home-inactive.png')}
                                style={{ width: icon_size, height: icon_size }}
                                resizeMethod='resize'
                                resizeMode='contain'
                            />
                        )
                    }

                }
            }
        },
        Profile: {
            screen: createStackNavigator({
                Profile: {
                    screen: ProfileScreens,
                    navigationOptions: {
                        header: null
                    }
                }
            }, {
                transitionConfig: () => {
                    return {
                        transitionSpec: {
                            duration: 500,
                            easing: Easing.out(Easing.poly(4)),
                            timing: Animated.timing,
                        },
                        screenInterpolator: (sceneProps) => {
                            const { layout, position, scene } = sceneProps;
                            const sceneIndex = scene.index;
                            const width = layout.initWidth;
                            const translateX = position.interpolate({
                                inputRange: [sceneIndex - 1, sceneIndex, sceneIndex + 1],
                                outputRange: [width, 0, 0]
                            })
                            return { transform: [{ translateX }] }
                        },
                    }
                },
            }),
            navigationOptions: {
                showLabel: true,
                tabBarIcon: ({ tintColor }) => {
                    if (tintColor === '#29C1C1') {
                        return (
                            <Image
                                source={require('../../assets/images/gear-pok-active.png')}
                                style={{ width: icon_size, height: icon_size }}
                                resizeMethod='resize'
                                resizeMode='contain'
                            />
                        )
                    } else {
                        return (
                            <Image
                                source={require('../../assets/images/gear-pok-inactive.png')}
                                style={{ width: icon_size, height: icon_size }}
                                resizeMethod='resize'
                                resizeMode='contain'
                            />
                        )
                    }

                }
            }
        },
    },
    (Platform.OS === 'android')
        ? {
            tabBarComponent: props => <TabBarComponent {...props} style={{ height: 60, paddingTop: 10, paddingBottom: 5 }} />,
            tabBarOptions: {
                activeTintColor: '#29C1C1',
                showLabel: true,
                labelStyle: {
                    fontSize: 12,
                    fontFamily: 'Nunito'
                }
            },
            tabBarPosition: 'bottom'
        }
        : {
            tabBarComponent: props => (
                <TabBarComponent {...props} style={{ height: 60, paddingTop: 10, paddingBottom: 5 }} />
            ),
            tabBarOptions: {
                activeTintColor: '#29C1C1',
                showLabel: true,
                labelStyle: {
                    fontSize: 12,
                    fontFamily: 'Nunito'
                }
            },
        })