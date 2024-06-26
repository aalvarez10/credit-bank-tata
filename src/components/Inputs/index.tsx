import { NativeSyntheticEvent, Text, TextInput, TextInputFocusEventData } from 'react-native';
import { defineStyles } from './style';
interface Props {
  placeholder?: string;
  labelUp?: string;
  onChangeText: (value: string) => void;
  value: string;
  name?: string;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  error?: boolean | undefined;
  helperText?: string;
  editable?: boolean;
  accesibilityId?: string;
  testID?: string;
  accesibilityMenssage?: string
}
const Input = ({
  placeholder,
  labelUp,
  onChangeText,
  value,
  name,
  onBlur,
  error,
  helperText,
  editable,
  accesibilityId,
  testID,
  accesibilityMenssage
}: Props) => {
  const styles = defineStyles();
  return (
    <>
      {labelUp && <Text style={styles.labelUp} nativeID={accesibilityId}>{labelUp}</Text>}
      <TextInput
        testID={testID}
        id={name}
        placeholder={placeholder}
        style={error ? [styles.input, styles.inputError] : styles.input}
        onChangeText={onChangeText}
        value={value}
        onBlur={onBlur}
        editable={editable}
        accessible={true}
        accessibilityLabel={''}
        accessibilityLabelledBy={accesibilityId}
        accessibilityHint={accesibilityMenssage}
      />
      {error && <Text style={styles.labelDown} accessible={true} accessibilityLabel={helperText}>{helperText}</Text>}
    </>
  );
};

export default Input;
