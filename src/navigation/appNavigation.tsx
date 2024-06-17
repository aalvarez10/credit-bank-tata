import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreditsCards from '../screens/CreditsCards';
import Layaout from '../layout/Layout';
import CreditCardDetail from '../screens/CreditCardDetail';
import CreditCardForm from '../screens/CreditCardForm';
import { CreditCardFormI } from '../interfaces/CreditCardFormI';


export type NavigationParams = {
  CreditCards: undefined,
  CreditCardDetail: {cardInfo: CreditCardFormI},
  CreditCardForm: {cardInfo?: CreditCardFormI}
}

const Stack = createNativeStackNavigator<NavigationParams>();

const AppNavigation = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="CreditCards" component={CreditsCards} options={{
          headerTitle: (props:any) => <Layaout {...props}/>,
          headerBackVisible: false
        }}/>
         <Stack.Screen name="CreditCardDetail" component={CreditCardDetail} options={{
          headerTitle: (props:any) => <Layaout {...props}/>,
          headerBackVisible: false
        }}/>
        <Stack.Screen name="CreditCardForm" component={CreditCardForm} options={{
          headerTitle: (props:any) => <Layaout {...props}/>,
          headerBackVisible: false
        }}/>
    </Stack.Navigator>
  );
};

export default AppNavigation;
