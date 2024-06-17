import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {defineStyles} from './style';
import {colors} from '../../theme/theme';

interface Props {
  name: string;
  type: string;
  onPress: () => void;
  disabled?: boolean;
  id?: string;
  isLoading?: boolean;
  accessibilityText?: string
  testID?: string
}

const Button = ({name, type, onPress, disabled, id, isLoading,accessibilityText, testID}: Props) => {
  const {style} = defineStyles(type);
  return (
    <TouchableOpacity
      id={id}
      testID={testID}
      accessible={true}
      accessibilityLabel={accessibilityText}
      style={style.styleButton}
      onPress={() => onPress()}
      disabled={disabled}>
      {isLoading ? (
        <ActivityIndicator
          testID="loading-indicator"
          size={'small'}
          color={colors.blueHeader}
        />
      ) : (
        <Text style={style.extraStyles}>{name}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
