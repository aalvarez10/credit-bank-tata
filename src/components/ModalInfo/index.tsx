import React, {useEffect, useRef} from 'react';
import {Animated, Modal, Text, TouchableOpacity, View} from 'react-native';
import {defineStyles} from './style';
import Button from '../Button';
import {typeButton} from '../Button/style';

interface Props {
  name: string;
  cardId: string;
  handleClose: (value: boolean) => void;
  handleConfirmDelete: (id: string) => void;
}
const ModalInfo = ({name, cardId, handleClose, handleConfirmDelete}: Props) => {
  const styles = defineStyles();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    fadeIn();
  }, []);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 0.9,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      testID={'modal-info'}
      style={[
        styles.overlay,
        {
          opacity: fadeAnim,
        },
      ]}>
      <View style={styles.container}>
        <View style={styles.containerIcon}>
          <TouchableOpacity
            onPress={() => {
              handleClose(false);
            }}>
            <Text style={styles.icon}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <Text style={styles.mensage}>
          ¿Estás seguro de eliminar el producto {name}?
        </Text>
        <View style={styles.divider} />
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Button
            id="confirm-button"
            name="Confirmar"
            type={typeButton.primary}
            onPress={() => handleConfirmDelete(cardId)}
          />
          <Button
            id="cancel-button"
            name="Cancelar"
            type={typeButton.secondaryTwo}
            onPress={() => handleClose(false)}
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default ModalInfo;
