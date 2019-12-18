import {
  StyleSheet
} from "react-native";
import {
  height,
  width
} from "../../../assets/constants/constants";
import colors from "../../../assets/constants/colors";
import { normalize } from 'react-native-elements';
import { Header } from 'react-navigation-stack';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  column: {
    flex: 1,
    flexDirection: 'column'
  },
  style_header: {
    backgroundColor: colors.dark,
    height: 70,
    zIndex: 99,
    // position: 'absolute',
    shadowOffset: { width: 10, height: 10, },
    shadowColor: colors.black,
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5
  },
  title_header: {
    marginLeft: -30,
    fontSize: 22,
    color: colors.white,
    fontFamily: 'Nunito',
    fontWeight: 'bold'
  },
  icon_employee: {
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  style_menu_img: { 
    width: 90, 
    height: 90, 
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: colors.gray
  },
  style_menu_img_badge: { 
    width: 30, 
    height: 30, 
    borderRadius: 30,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    bottom: 0,
    zIndex: 99,
    marginRight: -5,
    marginBottom: -5,
    position: 'absolute'
  },
  text_label: {
    fontSize: 16, 
    fontWeight: 'bold',
    fontFamily: 'Nunito',
    color: colors.black,
    marginTop: 15,
    marginLeft: 20
  },
  style_input_non_box: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14
  },
  style_container_input_non_box: {
    height: 35,
    marginVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 15
  },
  text_superscript: {
    fontSize: 16, 
    fontWeight: 'bold',
    fontFamily: 'Nunito',
    color: colors.blue,
    top: 0
  },
  style_input_error: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    textAlignVertical: 'center',
    color: colors.red,
    marginHorizontal: 30,
    marginVertical: 10
  },
  scrollView: {
    backgroundColor: colors.white,
    marginTop: Header.HEIGHT + 20
  },
  style_button: {
    width: width - 70,
    height: 45,
    borderRadius: 10,
    borderColor: colors.blue,
    backgroundColor: colors.blue,
    marginTop: 15,
    alignSelf: 'center'
  },
  style_button_title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
    color: colors.white,
    alignSelf: 'center'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    marginTop: Header.HEIGHT,
    backgroundColor: colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});