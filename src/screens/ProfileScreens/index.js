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
    Text,
    StatusBar,
} from 'react-native';

import AnimatedHeader from '../../assets/components/AnimatedHeader';
import colors from '../../assets/constants/colors';
import TouchableItem from '../../assets/constants/Touchable';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';
import AutoComplete from 'react-native-autocomplete-select';
import axios from 'axios';

const options = {
    title: 'Select Image',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export default class ProfileScreens extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            unggah_image: null,
            employees: [
                { text: 'suggestion1', anotherProperty: 'value' },
                { text: 'suggestion2', anotherProperty: 'value2' }
            ],
            loading: true
        }
    }

    async componentDidMount() {
        await axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then((res) => this.setState({ employees: res.data, loading: false }))
    }

    onSelect = (suggestion) => {
        console.log(suggestion) // the pressed suggestion
    }

    render() {
        const { unggah_image, employees, loading } = this.state;
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <AnimatedHeader
                        headerCenter={<Text style={styles.title_header}>Profil</Text>}
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
                                <View style={{ alignItems: 'flex-start', padding: 15, paddingTop: 30 }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <TouchableItem onPress={() => {
                                            ImagePicker.showImagePicker(options, (response) => {
                                                // Same code as in above section!
                                                console.log('Response = ', response);
                                                if (response.didCancel) {
                                                    console.log('User cancelled image picker');
                                                } else if (response.error) {
                                                    alert('ImagePicker Error: ' + response.error);
                                                } else if (response.customButton) {
                                                    console.log('User tapped custom button: ', response.customButton);
                                                } else {
                                                    let unggah_image = {
                                                        uri: response.uri,
                                                        type: response.type,
                                                        name: response.fileName
                                                    }

                                                    this.setState({ unggah_image })
                                                }
                                            });
                                        }}>
                                            <View style={{ margin: 25, borderRadius: 35, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: colors.black, width: 70, height: 70, }}>
                                                <View style={styles.style_menu_img_badge}>
                                                    <Icon name="pencil" size={15} color={colors.white} />
                                                </View>
                                                {
                                                    unggah_image ?
                                                        <Image source={{ uri: unggah_image.uri }} style={styles.style_menu_img} resizeMode='cover' />
                                                        :
                                                        <Icon name="user" size={50} color={colors.black} />
                                                }
                                            </View>
                                        </TouchableItem>
                                    </View>
                                    <AutoComplete
                                        onSelect={this.onSelect}
                                        suggestions={employees}
                                        suggestionObjectTextProperty='text'
                                        value='sug'
                                    />
                                </View>
                        }
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
};
