import React, { useEffect, useState } from 'react';
import CreditCardsRender from './render';
import apiCalls from '../../api/apiCalls';
import { CreditCardFormI } from '../../interfaces/CreditCardFormI';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationParams } from '../../navigation/appNavigation';
import { NavigationProp } from '@react-navigation/native';
import { ToastI } from '../../components/Toast';
import { typeToast } from '../../components/Toast/style';
import { StackScreenProps } from '@react-navigation/stack';
import { useFetchCreditsCards } from '../../hooks/useFetchCreditsCards';

interface Props extends StackScreenProps<NavigationParams, 'CreditCards'> { }
const initDetailToast = {
  isShow: false,
  mensage: '',
  type: '',
};
const CreditsCards = ({ navigation }: Props) => {

  const { listCreditCards, listCreditCardsAux, detailToast, isLoading, setDetailToast, setListCreditCards, getListCreditCards } = useFetchCreditsCards()

  const [valueSearch, setValueSearch] = useState<string>('');

  const handleChange = (e: string) => {
    setValueSearch(e);
    if (e.length > 0) {
      const filterList = listCreditCardsAux.filter(
        item =>
          item.id.toUpperCase().includes(e.toUpperCase()) ||
          item.name.toUpperCase().includes(e.toUpperCase()),
      );
      if (filterList.length === 0) {
        const detail: ToastI = {
          isShow: true,
          mensage: 'No se encontraron resultados',
          type: typeToast.error,
        };
        setDetailToast(detail);
      }
      setListCreditCards(filterList);
    } else {
      getListCreditCards();
    }
  };
  
  return (
    <CreditCardsRender
      navigation={navigation}
      listCreditCards={listCreditCards}
      detailToast={detailToast}
      isLoading={isLoading}
      valueSearch={valueSearch}
      handleChange={handleChange}
    />
  );
};

export default CreditsCards;
