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
    Image,
    FlatList,
    Text,
    StatusBar,
} from 'react-native';

import AnimatedHeader from '../../../assets/components/AnimatedHeader';
import colors from '../../../assets/constants/colors';
import TouchableItem from '../../../assets/constants/Touchable';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';
import axios from 'axios';

import {
    Header,
    LearnMoreLinks,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class ProfileScreens extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: [],
            loading: true
        }
    }

    async componentDidMount() {
        await axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then((res) => this.setState({ employees: res.data, loading: false }))
    }

    render() {
        const { employees, loading } = this.state;
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <AnimatedHeader
                        headerCenter={<Text style={styles.title_header}>Employees</Text>}
                        withBack={true}
                        iconColor={colors.orange}
                        otherStyle={styles.style_header}
                        onBackPress={() => this.props.navigation.goBack()}
                    />
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        {
                            loading ?
                                <View></View>
                                :
                                <FlatList
                                    data={employees}
                                    style={{ marginTop: 20 }}
                                    extraData={employees}
                                    renderItem={this._render_item}
                                    keyExtractor={(item, id) => item.id}
                                />
                        }
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }

    _render_item = ({ item, index }) => {
        return (
            // <TouchableItem onPress={() => this.props.navigation.navigate('DetailTransaksi', {
            //     item: item,
            //     updateCurrentBar: this.updateCurrentBar.bind(this)
            // })}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: colors.white, borderRadius: 10, marginHorizontal: 20, marginVertical: 5, padding: 10, height: 50, elevation: 10 }}>
                <View>
                    <Text style={styles.title_card}>Name</Text>
                    <Text style={{ width: 120 }} numberOfLines={1}>{item.employee_name}</Text>
                </View>
                <View>
                    <Text style={styles.title_card}>Age</Text>
                    <Text>{item.employee_age}</Text>
                </View>
                <View>
                    <Text style={styles.title_card}>Salary</Text>
                    <Text>{item.employee_salary}</Text>
                </View>
            </View>
            // </TouchableItem>
        )
    }
};
