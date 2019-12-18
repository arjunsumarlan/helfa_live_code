import {
  StyleSheet
} from "react-native";
import {
  height,
  width
} from "../../assets/constants/constants";
import colors from "../../assets/constants/colors";
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
    fontSize: 22,
    color: colors.white,
    fontFamily: 'Nunito',
    fontWeight: 'bold'
  },
  icon_employee: {
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  scrollView: {
    backgroundColor: colors.white,
    marginTop: Header.HEIGHT
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
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