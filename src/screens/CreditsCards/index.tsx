import React, {useEffect, useState} from 'react';
import CreditCardsRender from './render';
import apiCalls from '../../api/apiCalls';
import {CreditCardFormI} from '../../interfaces/CreditCardFormI';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParams} from '../../navigation/appNavigation';
import {NavigationProp} from '@react-navigation/native';
import {ToastI} from '../../components/Toast';
import {typeToast} from '../../components/Toast/style';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<NavigationParams,'CreditCards'>{}
const initDetailToast = {
  isShow: false,
  mensage: '',
  type: '',
};
const CreditsCards = ({navigation}: Props) => {
  const [listCreditCards, setListCreditCards] = useState<CreditCardFormI[]>([]);
  const [listCreditCardsAux, setListCreditCardsAux] = useState<
    CreditCardFormI[]
  >([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [valueSearch, setValueSearch] = useState<string>('');
  const [detailToast, setDetailToast] = useState<ToastI>(initDetailToast);

  const getListCreditCards = async () => {
    try {
      setIsLoading(true);
      const {data, status} = await apiCalls.get('');
      if (status === 200) {
        setListCreditCards(data);
        setListCreditCardsAux(data);
        setIsLoading(false);
      } else {
        const detail: ToastI = {
          isShow: true,
          mensage: 'Error al consultar productos',
          type: typeToast.error,
        };
        setDetailToast(detail);
        setIsLoading(false);
      }
    } catch (error) {
      const detail: ToastI = {
        isShow: true,
        mensage: 'Error al consultar productos',
        type: typeToast.error,
      };
      setDetailToast(detail);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getListCreditCards();
  }, []);

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
