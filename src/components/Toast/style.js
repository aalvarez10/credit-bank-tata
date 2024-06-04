import {StyleSheet} from 'react-native';
import { colors } from '../../theme/theme';

export const typeToast = {
  succes: 'succes',
  error: 'error',
};

export const defineStyles = type => {
  const baseToast = {
    position: 'absolute',
    top: 5,
    right: 20,
    width: '100%',
    justifyContent: 'center',
    height: 50,
    alignItems: 'center',
    backgroundColor: colors.white,
    zIndex: 4,

    borderTopWidth: 3,
    borderLeftWidth: 10,
    borderRadius: 10,
    padding: 10,

    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
  };
  const styleToast = StyleSheet.create({
    [typeToast.succes]: {
      ...baseToast,
      borderColor: 'green',
      shadowColor: 'green',
    },
    [typeToast.error]: {
      ...baseToast,
      borderColor: 'red',
      shadowColor: 'red',
    },
  });

  const extraStyles = StyleSheet.create({
    fadingText: {
        fontSize: 15,
      },
  })

  return {
    styles: styleToast[type],
    extraStyles
  };
};
