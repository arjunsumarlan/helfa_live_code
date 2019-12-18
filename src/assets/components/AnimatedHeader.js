import React from "react";
import {
  View,
  Text,
  Animated
} from "react-native";
import Ionicon from 'react-native-vector-icons/Ionicons'
import globalStyles from "../globalStyles";
import colors from "../constants/colors";
import TouchableItem from "../constants/Touchable";


export default AnimatedHeader = (props, otherProps) => (
  
  <Animated.View style={[globalStyles.headerContainer, { ...props.otherStyle }]} {...otherProps} >
    {props.withBack ? (
      <View style={globalStyles.headerWithBackLeftContainer} >
        <TouchableItem onPress={props.onBackPress} >
          <View style={globalStyles.backIconContainer}>
            <Ionicon name="md-arrow-back" size={27} color={props.iconColor || colors.blue} />
          </View>
        </TouchableItem> 
          <Text style={[globalStyles.backTitleContainer, { ...props.otherBackTitleStyle }, { color: props.textColor || colors.blue }]}>{props.title}</Text>
      </View>
    ):!props.isCenterCustomHeader ? (
      <View style={{ width: '20%', justifyContent: 'center', height: '100%' }} />
    ): null}
    <View style={{ width: !props.isCenterCustomHeader ? '60%' : '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {props.headerCenter}
    </View>
    {!props.isCenterCustomHeader ? (<View style={{ width: '20%', alignContent: 'center', justifyContent: 'center', height: '100%', ...props.headerRightStyle }}>
      {props.headerRight}
    </View>) : null}
  </Animated.View>
)