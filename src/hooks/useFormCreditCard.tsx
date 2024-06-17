import { useFormik } from "formik";
import { CreditCardFormI } from "../interfaces/CreditCardFormI";
import * as Yup from 'yup';
import { formatDate } from "../util/validateDate";
import { transformDate } from "../util/trasnsformDate";
import { useEffect, useState } from "react";
import { ToastI } from "../components/Toast";
import apiCalls from "../api/apiCalls";
import { typeToast } from "../components/Toast/style";

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
  

  interface Props {
    cardInfo: CreditCardFormI | undefined,
    existId: boolean, 
    navigation: any
  }

export const useFormCreditCard = ({cardInfo,existId,navigation}:Props) => {
    const [isNewRegister, setIsNewRegister] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
 
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
              val => formatDate(val,cardInfo) <= 1,
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
        setIsLoading(true);
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


      return {formik, isNewRegister, isLoading, detailToast}
}