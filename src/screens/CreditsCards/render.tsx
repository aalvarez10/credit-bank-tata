import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {defineStyles} from './styles';
import Input from '../../components/Inputs';
import SelectableCard from '../../components/SelectableCard';
import Button from '../../components/Button';
import {typeButton} from '../../components/Button/style';
import {CreditCardFormI} from '../../interfaces/CreditCardFormI';
import Toast, {ToastI} from '../../components/Toast';
import Skeleton from '../../components/Skeleton';

interface Props {
  navigation: any;
  listCreditCards: CreditCardFormI[];
  detailToast: ToastI;
  handleChange: (value: string) => void
  valueSearch: string;
  isLoading: boolean;
}

const CreditCardsRender = ({
  navigation,
  listCreditCards,
  detailToast,
  isLoading,
  handleChange,
  valueSearch
}: Props) => {
  const styles = defineStyles();
  return (
    <View 
    accessible={true}
    accessibilityLabel='Pantalla Listado de tarjetas'
    style={styles.container}
    >
      <Toast
        isShow={detailToast.isShow}
        type={detailToast.type}
        mensage={detailToast.mensage}
      />
      <Input
        placeholder="Buscar..."
        onChangeText={(e: string) => handleChange(e)}
        value={valueSearch}
      />

      {isLoading ? (
        <View style={styles.containerList}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </View>
      ) : (
        <>
          <FlatList
            contentContainerStyle={styles.containerList}
            data={listCreditCards}
            keyExtractor={(item: CreditCardFormI) => item.id}
            bounces={false}
            renderItem={({item}) => {
              return <SelectableCard card={item} navigation={navigation} />;
            }}
            ListEmptyComponent={
              <Text style={styles.textEmpty}>No existen productos</Text>
            }
          />

          <Button
            name="Agregar"
            accessibilityText='Boton Agregar Nueva Tarjeta'
            type={typeButton.primary}
            onPress={() => navigation.push('CreditCardForm', {cardInfo: false})}
          />
        </>
      )}
    </View>
  );
};

export default CreditCardsRender;
