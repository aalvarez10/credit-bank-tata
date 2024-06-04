import {StyleSheet} from 'react-native';
import {colors} from '../../theme/theme';

export const defineStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: colors.grey,
    },
    skeletonText: {
      backgroundColor: colors.grey,
      width: 100,
      height: 10,
      marginTop: 10,
    },
    skeletonIcon: {
      backgroundColor: colors.grey,
      width: 44,
      height: 44,
      borderRadius: 44 / 2,
    },
  });
};
