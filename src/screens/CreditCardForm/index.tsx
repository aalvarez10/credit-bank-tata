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

const initialForm: CreditCardFormI = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: '',
  date_revision: '',
};
const initToast = {
  isShow: false,
  mensage: '',
  type: '',
};

interface Props extends StackScreenProps<NavigationParams, 'CreditCardForm'> { }

const CreditCardForm = ({ navigation, route }: Props) => {
  const [isNewRegister, setIsNewRegister] = useState<boolean>(true);

  const [existId, setExistId] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { cardInfo } = route.params;

  const [detailToast, setDetailToast] = useState<ToastI>(initToast);

  useEffect(() => {
    if (cardInfo) {
      formik.setFieldValue('id', cardInfo.id);
      formik.setFieldValue('name', cardInfo.name);
      formik.setFieldValue('description', cardInfo.description);
      formik.setFieldValue('logo', cardInfo.logo);
      formik.setFieldValue(
        'date_release',
        transformDate(cardInfo.date_release),
      );
      formik.setFieldValue(
        'date_revision',
        transformDate(cardInfo.date_revision),
      );

      setIsNewRegister(false);
    }
  }, [cardInfo]);

  const formatDate = (date: string | Date) => {
    if (cardInfo) {
      return 0  
    } 
      let today = new Date();
      let fechaIng = new Date(date);
      let resta = today.getTime() - fechaIng.getTime();
      return Math.round(resta / (1000 * 60 * 60 * 24));
    
  };

  const formik = useFormik<CreditCardFormI>({
    initialValues: initialForm,
    validationSchema: Yup.object({
      id: Yup.string()
        .required('ID no válido')
        .test(
          'len',
          'El ID debe ser de 3 a 10 caracteres',
          val => val.toString().length >= 3 && val.toString().length <= 10,
        ),
      name: Yup.string()
        .required('El campo es requerido')
        .test(
          'len',
          'El nombre debe ser de 5 a 100 caracteres',
          val => val.toString().length >= 5 && val.toString().length <= 100,
        ),
      description: Yup.string()
        .required('El campo es requerido')
        .test(
          'len',
          'El ID debe ser de 10 a 200 caracteres',
          val => val.toString().length >= 10 && val.toString().length <= 200,
        ),
      logo: Yup.string().required('El campo es requerido'),
      date_release: Yup.string()
        .required('El campo es requerido')
        .test(
          'len',
          'La fecha debe ser igual o mayor a la actual',
          val => formatDate(val) <= 1,
        ),
    }),
    onSubmit: async value => {
      setDetailToast(initToast)
      if (isNewRegister) {
        handeleSaveNewCard(value);
      } else {
        handleUpdateCard(value);
      }
    },
  });

  const handeleSaveNewCard = async (value: CreditCardFormI) => {
    setIsLoading(true);
    if (!existId) {
      try {
        const { status } = await apiCalls.post('', value);
        if (status === 200) {
          setIsLoading(false);
          navigation.push('CreditCards');
        }
      } catch (error) {
        setIsLoading(false);
        const detail: ToastI = {
          isShow: true,
          mensage: 'Error al guardar producto',
          type: typeToast.error,
        };
        setDetailToast(detail);
      }
    } else {
      setIsLoading(false);
      const detail: ToastI = {
        isShow: true,
        mensage: 'El id ingresado ya existe ',
        type: typeToast.error,
      };
      setDetailToast(detail);
    }
  };

  const handleUpdateCard = async (value: CreditCardFormI) => {
    try {
      const { data, status } = await apiCalls.put('', value);
      if (status === 200) {
        setIsLoading(false);
        navigation.push('CreditCards');
      } else {
        const detail: ToastI = {
          isShow: true,
          mensage: 'Error al editar producto',
          type: typeToast.error,
        };
        setDetailToast(detail);
        setIsLoading(false);
      }
    } catch (error) {
      const detail: ToastI = {
        isShow: true,
        mensage: 'Error al editar producto',
        type: typeToast.error,
      };
      setDetailToast(detail);
      setIsLoading(false);
    }
  };

  const handleBlurId = async () => {
    if (formik.values.id.length >= 3 && formik.values.id.length >= 3) {
      const { data } = await apiCalls.get(`/verification?id=${formik.values.id}`);

      setExistId(data);
    }
    formik.setFieldTouched('id');
  };

  const handleBlurDate = () => {
    if (formatDate(formik.values.date_release) <= 1) {
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
