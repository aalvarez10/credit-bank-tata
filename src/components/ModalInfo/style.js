import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {colors} from '../../theme/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const defineStyles = () => {
  return StyleSheet.create({
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: '#6E6E73',
      justifyContent: 'flex-end',
      zIndex: 2,
    },
    container: {
      backgroundColor: colors.white,
      opacity:1,
      width: windowWidth,
      height: windowHeight / 2.8,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    containerIcon: {
      justifyContent: 'center',
      alignItems:'flex-end',
      marginRight: 20,
      marginTop: 10,
      marginBottom: 10,
    },
    icon:{
      fontWeight: 'bold',
      fontSize: 20,
      color: 'black',
    },
    divider: {
      borderTopColor: '#bfbfc1',
      borderTopWidth: 1,
    },
    mensage:{
      textAlign: 'center',
      fontSize: 15,
      fontWeight:'500',
      color: colors.black,
      paddingVertical: 30,
      paddingHorizontal: 30
    }
  });
};
