import {NavigationContainer} from '@react-navigation/native';
import apiCalls from '../../../api/apiCalls';
import CreditCardForm from '..';
import {render, userEvent, waitFor} from '@testing-library/react-native';

jest.useFakeTimers();

jest.mock('../../../api/apiCalls');
const mokedApiCalls = apiCalls;

const mockedNavigate = jest.fn();

const renderComponent = props => {
  return render(
    <NavigationContainer>
      <CreditCardForm {...props} />
    </NavigationContainer>,
  );
};

describe('CreditCardForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const route = {
    params: {
      cardInfo: {
        id: '123',
        date_release: '2023-01-01',
      },
    },
  };

  const navigation = {push: mockedNavigate};

  it('shoul renders correctly CredirCardForm', async () => {
    const {getByTestId} = renderComponent({route, navigation});
    await waitFor(() => {
      expect(getByTestId('creditCardForm')).toBeTruthy();
    });
  });

  it('handles blur on ID input and sets existId state', async () => {
    apiCalls.get.mockResolvedValue({data: true});
    const user = userEvent.setup()

    const {getByTestId} = renderComponent({route, navigation});

    const idInput = getByTestId('textfield-id');
    await user.type(idInput, "123[Tab]");
    await(() => {
        expect(handleBlur).oHaveBeenCalled(1) 
      });

    await (() => {
        expect(apiCalls.get).toHaveBeenCalledWith('/verification?id=123');
      });
    
  });
});



