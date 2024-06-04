
import { Text, View } from 'react-native';
import { defineStyles } from './style';
import Icon  from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/theme';

const Layaout = () => {

    const styles = defineStyles();
  return (
        <View style={styles.headerContainer}>
          <Icon name='cash-outline' size={20} color={colors.blueHeader} style={{marginRight:5}}/>
          <Text style={styles.text}>BANCO</Text>
        </View>
       
  )
}

export default Layaout