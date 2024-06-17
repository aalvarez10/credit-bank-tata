import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import { NavigationContainer } from '@react-navigation/native';
import apiCalls from '../../../api/apiCalls';
import CreditCardDetail from '..';

jest.useFakeTimers()

jest.mock('../../../api/apiCalls');
const mockedApiCalls = apiCalls;

const mockedNavigate = jest.fn();

const renderComponent = (props) => {
  return render(
    <NavigationContainer>
      <CreditCardDetail {...props} />
    </NavigationContainer>
  );
};

describe('CreditCardDetail', () => {
  const route = {
    params: {
      cardInfo: { id: '1', name: 'Test Card', number: '1234 5678 9012 3456' },
    },
  };

  const navigation = { push: mockedNavigate };

  it('should open modal on button press', () => {
    const { getByTestId } = renderComponent({ route, navigation });

    const openModalButton = getByTestId('btn-eliminate');
    fireEvent.press(openModalButton);

    expect(getByTestId('modal-info')).toBeTruthy();
  });

   it('should handle successful delete', async () => {
    mockedApiCalls.delete.mockResolvedValue({ status: 200 });

    const { getByTestId } = renderComponent({ route, navigation });

    const openModalButton = getByTestId('btn-eliminate');
    fireEvent.press(openModalButton);

    const confirmButton = getByTestId('confirm-button');
    fireEvent.press(confirmButton);

    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenCalledWith('CreditCards');
      expect(getByTestId('toast-message')).toHaveTextContent('Se elimino correctamente');
    });
  });


  it('should handle delete error', async () => {
    mockedApiCalls.delete.mockResolvedValue({ status: 400 });

    const { getByTestId } = renderComponent({ route, navigation });

    const openModalButton = getByTestId('btn-eliminate');
    fireEvent.press(openModalButton);

    const confirmButton = getByTestId('confirm-button');
    fireEvent.press(confirmButton);

    await waitFor(() => {
      expect(getByTestId('toast-message')).toHaveTextContent('Error al eliminar productos');
    });
  });

  it('should handle delete exception', async () => {
    mockedApiCalls.delete.mockRejectedValue(new Error('Network error'));

    const { getByTestId } = renderComponent({ route, navigation });

    const openModalButton = getByTestId('btn-eliminate');
    fireEvent.press(openModalButton);

    const confirmButton = getByTestId('confirm-button');
    fireEvent.press(confirmButton);

    await waitFor(() => {
      expect(getByTestId('toast-message')).toHaveTextContent('Error al ralizar la acción');
    });
  }); 
});