import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import CreditsCards from '..';
import { NavigationContainer } from '@react-navigation/native';
import { useCreditsCardsList } from '../../../hooks/useCreditsCardsList';

jest.useFakeTimers();
jest.mock('../../../hooks/useCreditsCardsList');

const mockedUseCreditsCardsList = useCreditsCardsList;

const navigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

describe('CreditsCards', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedUseCreditsCardsList.mockReturnValue({
      listCreditCards: [
        { id: '123', name: 'Card 1' },
        { id: '456', name: 'Card 2' },
      ],
      listCreditCardsAux: [
        { id: '123', name: 'Card 1' },
        { id: '456', name: 'Card 2' },
      ],
      toast: { isShow: false, mensage: '', type: '' },
      isLoading: false,
      setListCreditCards: jest.fn(),
      getListCreditCards: jest.fn(),
    });
  });

  it('should renders correctly', () => {
    const { getByText } = render(
      <NavigationContainer>
        <CreditsCards navigation={navigation} />
      </NavigationContainer>
    );
    
    expect(getByText('Card 1')).toBeTruthy();
    expect(getByText('Card 2')).toBeTruthy();
  });

  it('should show toast message when no results found', async () => {
        const { getByPlaceholderText, getByText } = render(
      <NavigationContainer>
        <CreditsCards navigation={navigation} />
      </NavigationContainer>
    );

    const searchInput = getByPlaceholderText('Buscar...');
    fireEvent.changeText(searchInput, 'Nonexistent Card');

    await waitFor(() => {
      expect(getByText('No se encontraron resultados')).toBeTruthy();
    });
  });

});
