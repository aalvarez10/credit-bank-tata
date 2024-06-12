import React, {useEffect, useRef} from 'react';
import {Animated, Text} from 'react-native';
import {defineStyles} from './style';

export interface ToastI {
  isShow: boolean;
  type: string;
  mensage: string;
}

const Toast = ({isShow, type, mensage}: ToastI) => {
  const {styles, extraStyles} = defineStyles(type);
  useEffect(() => {
    fadeIn();
    setTimeout(() => {
      fadeOut();
    }, 2000);
    return () => {
      fadeOut();
    };
  }, [isShow, type, mensage]);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    isShow=false
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <>
      {isShow && (
        <Animated.View
          style={[
            styles,
            {
              opacity: fadeAnim,
            },
          ]}>
          <Text style={extraStyles.fadingText} accessible={true} accessibilityHint={mensage}>{mensage}</Text>
        </Animated.View>
      )}
    </>
  );
};

export default Toast;
