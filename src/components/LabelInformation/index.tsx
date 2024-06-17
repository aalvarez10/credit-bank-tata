import React from 'react';
import { View, Text } from 'react-native';
import { defineStyles } from './styles';

interface Props {
  label: string;
  detail: string;
}
const LabelInfo = ({ label, detail }: Props) => {
  const styles = defineStyles();
  return (
    <View style={styles.containerInf} accessible={true} accessibilityLabel={`${label} ${detail}`} >
      <Text style={styles.textLabel}>{label}</Text>
      <Text style={styles.textInfo}>{detail}</Text>
    </View>
  );
};

export default LabelInfo;
