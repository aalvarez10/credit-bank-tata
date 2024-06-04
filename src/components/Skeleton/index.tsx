import {Text, View} from 'react-native';
import { defineStyles } from './styles';

const Skeleton = () => {
    const styles = defineStyles()
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.skeletonText}/>
        <View style={styles.skeletonText}/>
      </View>
      <View style={styles.skeletonIcon}/>
    </View>
  );
};

export default Skeleton;
