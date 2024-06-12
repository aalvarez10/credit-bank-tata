import React, { useEffect, useState } from 'react';
import CreditCardFormRender from './render';
import { CreditCardFormI } from '../../interfaces/CreditCardFormI';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import apiCalls from '../../api/apiCalls';
import { transformDate } from '../../util/trasnsformDate';
import { ToastI } from '../../components/Toast';
import { typeToast } from '../../components/Toast/style';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationParams } from '../../navigation/appNavigation';
import { formatDate } from '../../util/validateDate';
import { useFormCreditCard } from '../../hooks/useFormCreditCard';


interface Props extends StackScreenProps<NavigationParams, 'CreditCardForm'> { }

const CreditCardForm = ({ navigation, route }: Props) => {
  const { cardInfo } = route.params;
  const [existId, setExistId] = useState(false);
  
  const { formik, isNewRegister, isLoading, detailToast } = useFormCreditCard(cardInfo, existId,navigation);

  const handleBlurId = async () => {
    if (formik.values.id.length >= 3 && formik.values.id.length >= 3) {
      const { data } = await apiCalls.get(`/verification?id=${formik.values.id}`);

      setExistId(data);
    }
    formik.setFieldTouched('id');
  };

  const handleBlurDate = () => {
    if (formatDate(formik.values.date_release,cardInfo) <= 1) {
      const newDate = new Date(formik.values.date_release);
      newDate.setDate(newDate.getDate() + 366);
      formik.setFieldValue('date_revision', transformDate(newDate));
    }

    formik.setFieldTouched('date_release');
  };

  return (
    <CreditCardFormRender
      formik={formik}
      isNewRegister={isNewRegister}
      handleBlurId={handleBlurId}
      handleBlurDate={handleBlurDate}
      existId={existId}
      isLoading={isLoading}
      detailToast={detailToast}
    />
  );
};

export default CreditCardForm;
