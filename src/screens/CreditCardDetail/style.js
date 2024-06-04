import {StyleSheet} from 'react-native';
import {colors} from '../../theme/theme';

export const defineStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    inner: {
      justifyContent: 'space-around',
      paddingBottom: 40
    },
    containerDetail: {
      marginTop: 45,
      paddingHorizontal: 5,
    },
    containerLogo: {
      paddingHorizontal: 10,
      marginVertical: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 15,
    },
    imageCard: {
      width: '100%',
      height: 120,
      resizeMode: 'contain',
      marginTop: 15,
    },
  });
};
