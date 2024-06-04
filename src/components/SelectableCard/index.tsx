import {Text, TouchableOpacity, View} from 'react-native';
import {defineStyles} from './styles';
import { CreditCardFormI } from '../../interfaces/CreditCardFormI';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  card: CreditCardFormI;
  navigation:any
}

const SelectableCard = ({card, navigation}: Props) => {
  const styles = defineStyles();
  const handleOnPress = () => {
    navigation.push('CreditCardDetail', {cardInfo: card})
  }
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleOnPress()}>
      <View>
        <Text style={styles.primaryText}>{card.name}</Text>
        <Text style={styles.secondaryText}>ID: {card.id}</Text>
      </View>
      <Icon name='chevron-forward-outline' size={20}/>
    </TouchableOpacity>
  );
};

export default SelectableCard;
