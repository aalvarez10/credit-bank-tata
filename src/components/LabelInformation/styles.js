import {StyleSheet} from 'react-native';

export const defineStyles = () => {
  return StyleSheet.create({
    containerInf: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      marginVertical: 8,
    },
    textLabel: {
      fontSize: 15,
    },
    textInfo: {
      fontSize: 15,
      fontWeight: 'bold',
      width: 200,
      alignItems: 'flex-end',
      textAlign: 'right',
    },
  });
};
