import React from 'react';
import {View, Text} from 'react-native';
import {defineStyles} from './styles';

interface Props {
    label: string;
    detail: string|Date;
}
const LabelInfo = ({label, detail}:Props) => {
  const styles = defineStyles();
  return (
    <View style={styles.containerInf}>
      <Text style={styles.textLabel}>{label}</Text>
      <Text style={styles.textInfo}>{detail.toString()}</Text>
    </View>
  );
};

export default LabelInfo;
