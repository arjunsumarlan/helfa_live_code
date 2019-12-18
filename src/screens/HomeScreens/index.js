/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import AnimatedHeader from '../../assets/components/AnimatedHeader';
import colors from '../../assets/constants/colors';
import TouchableItem from '../../assets/constants/Touchable';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import ActionButton from 'react-native-action-button';

import {
    Header,
    LearnMoreLinks,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class HomeScreens extends Component {

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView style={{ height: '100%', flex: 1 }}>
                    <AnimatedHeader
                        headerCenter={<Text style={styles.title_header}>EXAMPLE APP</Text>}
                        withBack={false}
                        otherStyle={styles.style_header}
                    />
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <View style={{ alignItems: 'flex-start', padding: 15, paddingTop: 30 }}>
                            <TouchableItem onPress={() => this.props.navigation.navigate('ListEmployee')}>
                                <View style={styles.icon_employee}>
                                    <View style={[styles.icon_employee, { backgroundColor: colors.orange, borderRadius: 20, width: 70, height: 70 }]}>
                                        <Icon name="user" size={35} color={colors.black} />
                                    </View>
                                    <Text style={{ width: 100, marginTop: 10, textAlign: 'center' }}>View all employees</Text>
                                </View>
                            </TouchableItem>
                        </View>
                    </ScrollView>
                    <ActionButton buttonColor={colors.orange}>
                        <ActionButton.Item buttonColor={colors.orange} title="New Employee" onPress={() => this.props.navigation.navigate('CreateEmployee')}>
                            <Icon name="user" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                    </ActionButton>
                </SafeAreaView>
            </>
        );
    }
};
