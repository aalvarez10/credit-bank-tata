import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { defineStyles } from './style';
import Input from '../../components/Inputs';
import Button from '../../components/Button';
import { typeButton } from '../../components/Button/style';
import { FormikProps } from 'formik';
import { CreditCardFormI } from '../../interfaces/CreditCardFormI';
import Toast, { ToastI } from '../../components/Toast';

interface Props {
  formik: FormikProps<CreditCardFormI>;
  isNewRegister: boolean;
  handleBlurId: () => void;
  handleBlurDate: () => void;
  existId: boolean;
  isLoading: boolean;
  detailToast: ToastI;
}
const CreditCardFormRender = ({
  formik,
  isNewRegister,
  handleBlurId,
  handleBlurDate,
  existId,
  isLoading,
  detailToast,
}: Props) => {
  const styles = defineStyles();
  return (
    <ScrollView style={styles.container} testID='creditCardForm'>
      <Toast
        isShow={detailToast.isShow}
        type={detailToast.type}
        mensage={detailToast.mensage}
      />
      <View style={styles.inner}>
        <Text style={styles.title}>
          Formulario de {isNewRegister ? 'Registro' : 'Edición'}
        </Text>
        <Input
          testID="textfield-id"
          labelUp="ID"
          accesibilityId="formLabelId"
          name={'id'}
          onChangeText={formik.handleChange('id')}
          value={formik.values.id}
          onBlur={handleBlurId}
          error={!!(formik.errors.id && formik.touched.id) || !!existId}
          helperText={existId ? 'El ID ya existe' : formik.errors.id}
          editable={isNewRegister}
        />
        <Input
          labelUp="Nombre"
          accesibilityId="formLabelName"
          onChangeText={formik.handleChange('name')}
          value={formik.values.name}
          name={'name'}
          onBlur={formik.handleBlur('name')}
          error={!!(formik.errors.name && formik.touched.name)}
          helperText={formik.errors.name}
        />
        <Input
          labelUp="Descripción"
          accesibilityId="formLabelDescription"
          onChangeText={formik.handleChange('description')}
          value={formik.values.description}
          name={'description'}
          onBlur={formik.handleBlur('description')}
          error={!!(formik.errors.description && formik.touched.description)}
          helperText={formik.errors.description}
        />
        <Input
          labelUp="Logo"
          accesibilityId="formLabelLogo"
          onChangeText={formik.handleChange('logo')}
          value={formik.values.logo}
          name={'logo'}
          onBlur={formik.handleBlur('logo')}
          error={!!(formik.errors.logo && formik.touched.logo)}
          helperText={formik.errors.logo}
        />
        <Input
        testID="date_release"
          labelUp="Fecha Liberación"
          accesibilityId="formLabelDateRelease"
          onChangeText={formik.handleChange('date_release')}
          value={formik.values.date_release.toString()}
          name={'date_release'}
          onBlur={handleBlurDate}
          error={!!(formik.errors.date_release && formik.touched.date_release)}
          helperText={formik.errors.date_release}
          placeholder="aaaa-mm-dd"
        />
        <Input
          testID="date_revision"
          labelUp="Fecha Revisión"
          accesibilityId="formLabelDateRevision"
          onChangeText={formik.handleChange('date_revision')}
          value={formik.values.date_revision.toString()}
          name={'date_revision'}
          onBlur={formik.handleBlur('date_revision')}
          error={
            !!(formik.errors.date_revision && formik.touched.date_revision)
          }
          helperText={formik.errors.date_revision}
          placeholder="aaaa-mm-dd"
          editable={false}
        />

        <View style={{ paddingTop: 22, marginBottom: 10 }}>
          <Button
            name="Enviar"
            accessibilityText='Boton Guardar Tarjeta Nueva'
            type={typeButton.primaryTwo}
            onPress={() => {
              formik.submitForm();
            }}
            isLoading={isLoading}
            disabled={isLoading}
          />
          <Button
            name="Reiniciar"
            accessibilityText='Boton Reiniciar Formulario'
            type={typeButton.secondary}
            onPress={() => formik.resetForm()}
            disabled={!isNewRegister || isLoading}
            isLoading={isLoading}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CreditCardFormRender;
