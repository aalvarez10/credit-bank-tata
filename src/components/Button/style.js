import {StyleSheet} from 'react-native';
import {colors} from '../../theme/theme';

export const typeButton = {
  primary: 'primary',
  primaryTwo: 'primaryTwo',
  secondary: 'secondary',
  secondaryTwo: 'secondaryTwo',
  error: 'error',
};

export const defineStyles = type => {
  const baseButton = {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginTop: 10,
  };
  

  const baseText = {
    fontSize: 13,
    fontWeight: 'bold',
  };
  const stylesButton = StyleSheet.create({
    [typeButton.primary]: {
      ...baseButton,
      backgroundColor: colors.yellow,
    },
    [typeButton.primaryTwo]: {
      ...baseButton,
      backgroundColor: colors.yellow,
      top: '22%',
    },
    [typeButton.secondaryTwo]: {
      ...baseButton,
      backgroundColor: '#c4c4c4',
    },
    [typeButton.secondary]: {
      ...baseButton,
      backgroundColor: colors.grey,
      top: '22%',
    },
    [typeButton.error]: {
      ...baseButton,
      backgroundColor: colors.red,
      top: '22%',
    },
  });

  const stylesText = StyleSheet.create({
    [typeButton.primary]: {
      ...baseText,
      color: colors.blueHeader,
    },
    [typeButton.primaryTwo]: {
      ...baseText,
      color: colors.blueHeader,
    },
    [typeButton.secondary]: {
      ...baseText,
      color: colors.blueHeader,
    },
    [typeButton.secondaryTwo]: {
      ...baseText,
      color: colors.blueHeader,
    },
    [typeButton.error]: {
      ...baseText,
      color: colors.white,
    },
  });

  return {
    style: {
      styleButton: StyleSheet.compose(stylesButton[type]),
      extraStyles: stylesText[type],
    },
  };
};
