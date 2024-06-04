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
    title: {
      fontWeight: 'bold',
      fontSize: 25,
      color: colors.black,
    },
  });
};
