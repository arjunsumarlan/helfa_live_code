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
import { Input, Button } from 'react-native-elements';
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
            name: '',
            age: '',
            salary: ''
        }
    }

    render() {
        const { name, age, salary } = this.state;
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <AnimatedHeader
                        headerCenter={<Text style={styles.title_header}>New Employee</Text>}
                        withBack={true}
                        iconColor={colors.orange}
                        otherStyle={styles.style_header}
                        onBackPress={() => this.props.navigation.goBack()}
                    />
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <Text style={styles.text_label}>Name<Text style={styles.text_superscript}>{` *`}</Text></Text>
                        <Input
                            value={name}
                            onChangeText={(value) =>
                                this.setState({
                                    name: value
                                })
                            }
                            autoCapitalize='none'
                            inputStyle={styles.style_input_non_box}
                            inputContainerStyle={styles.style_container_input_non_box} />
                        <Text style={styles.text_label}>Age<Text style={styles.text_superscript}>{` *`}</Text></Text>
                        <Input
                            value={age}
                            onChangeText={(value) =>
                                this.setState({
                                    age: value
                                })
                            }
                            autoCapitalize='none'
                            inputStyle={styles.style_input_non_box}
                            inputContainerStyle={styles.style_container_input_non_box} />
                        <Text style={styles.text_label}>Salary<Text style={styles.text_superscript}>{` *`}</Text></Text>
                        <Input
                            value={salary}
                            onChangeText={(value) =>
                                this.setState({
                                    salary: value
                                })
                            }
                            autoCapitalize='none'
                            inputStyle={styles.style_input_non_box}
                            inputContainerStyle={styles.style_container_input_non_box} />
                        <Button
                            onPress={async () => {
                                if (
                                    name !== '' &&
                                    age !== '' &&
                                    salary !== ''
                                ) {
                                    await axios.post('http://dummy.restapiexample.com/api/v1/create?=', {
                                        name: name,
                                        salary: salary,
                                        age: age
                                    }).then(() => this.props.navigation.navigate('ListEmployee'))
                                } else {
                                    alert('Mohon dicek kembali ya :)')
                                }
                            }}
                            buttonStyle={styles.style_button}
                            title='Create'
                            titleStyle={styles.style_button_title} />
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
};
