import React from 'react';
import {Image, Text, View} from 'react-native';
import {defineStyles} from './style';
import Button from '../../components/Button';
import {typeButton} from '../../components/Button/style';
import LabelInfo from '../../components/LabelInformation';
import ModalInfo from '../../components/ModalInfo';
import {CreditCardFormI} from '../../interfaces/CreditCardFormI';
import {transformDate} from '../../util/trasnsformDate';
import Toast, {ToastI} from '../../components/Toast';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationAction } from '@react-navigation/native';
import { NavigationParams } from '../../navigation/appNavigation';

interface Props extends StackScreenProps<NavigationParams,'CreditCardDetail'> {
  openModalConfirm: boolean;
  setOpenModalConfirm: (value: boolean) => void;
  cardInfo: CreditCardFormI;
  handleConfirmDelete: (id: string) => void;
  detailToast: ToastI;
  setDetailToast: (object: ToastI) => void;
}
const CreditCardDetailRender = ({
  openModalConfirm,
  setOpenModalConfirm,
  cardInfo,
  handleConfirmDelete,
  navigation,
  detailToast,
  setDetailToast,
}: Props) => {
  const styles = defineStyles();
  return (
    <View style={styles.container}>
      {openModalConfirm && (
        <ModalInfo
          name={cardInfo.name}
          cardId={cardInfo.id}
          handleClose={(value: boolean) => setOpenModalConfirm(value)}
          handleConfirmDelete={id => handleConfirmDelete(id)}
        />
      )}

      <Toast
        isShow={detailToast.isShow}
        type={detailToast.type}
        mensage={detailToast.mensage}
      />
      <Text style={styles.title}>ID: {cardInfo.id}</Text>
      <Text style={styles.subtitle}>{cardInfo.name}</Text>
      <View style={styles.containerDetail}>
        <LabelInfo label="Nombre" detail={cardInfo.name} />
        <LabelInfo label="Descripción" detail={cardInfo.description} />
        <View style={styles.containerLogo}>
          <Text>Logo</Text>
          <Image
            style={styles.imageCard}
            source={{
              uri: cardInfo.logo,
            }}
          />
        </View>
        <LabelInfo
          label="Fecha liberación"
          detail={transformDate(cardInfo.date_release)}
        />
        <LabelInfo
          label="Fecha revisión"
          detail={transformDate(cardInfo.date_revision)}
        />
      </View>

      <Button
        name="Editar"
        type={typeButton.secondary}
        onPress={() =>
          navigation.push('CreditCardForm', {
            cardInfo,
          })
        }
      />
      <Button
        name="Eliminar"
        type={typeButton.error}
        onPress={() => {
          setOpenModalConfirm(true);
          setDetailToast({
            isShow: false,
            mensage: '',
            type: '',
          });
        }}
      />
    </View>
  );
};

export default CreditCardDetailRender;
