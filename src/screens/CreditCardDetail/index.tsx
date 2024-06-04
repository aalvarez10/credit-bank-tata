import React, {useState} from 'react';
import CreditCardDetailRender from './render';
import apiCalls from '../../api/apiCalls';
import {ToastI} from '../../components/Toast';
import {typeToast} from '../../components/Toast/style';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationParams } from '../../navigation/appNavigation';

interface Props extends StackScreenProps<NavigationParams,'CreditCardDetail'>{}
const CreditCardDetail = ({route, navigation}: Props) => {
  const {cardInfo} = route.params;

  const [openModalConfirm, setOpenModalConfirm] = useState<boolean>(false);

  const [detailToast, setDetailToast] = useState<ToastI>({
    isShow: false,
    mensage: '',
    type: '',
  });

  const handleConfirmDelete = async (id: string) => {
    try {
      const {status} = await apiCalls.delete(`?id=${id}`);
      if (status === 200) {
        setOpenModalConfirm(false);

        const detail: ToastI = {
          isShow: true,
          mensage: 'Se elimino correctamente',
          type: typeToast.succes,
        };
        setDetailToast(detail);
        setTimeout(() => {
          navigation.push('CreditCards');
        }, 500);
      } else {
        setOpenModalConfirm(false);
        const detail: ToastI = {
          isShow: true,
          mensage: 'Error al eliminar productos',
          type: typeToast.error,
        };
        setDetailToast(detail);
      }
    } catch (error) {
      setOpenModalConfirm(false);
      const detail: ToastI = {
        isShow: true,
        mensage: 'Error al ralizar la acción',
        type: typeToast.error,
      };
      setDetailToast(detail);
    }
  };

  return (
    <CreditCardDetailRender
      openModalConfirm={openModalConfirm}
      setOpenModalConfirm={value => setOpenModalConfirm(value)}
      handleConfirmDelete={handleConfirmDelete}
      cardInfo={cardInfo}
      navigation={navigation}
      detailToast={detailToast}
      setDetailToast={setDetailToast} 
      route={route}    />
  );
};

export default CreditCardDetail;
