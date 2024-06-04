import {NativeSyntheticEvent, Text, TextInput, TextInputFocusEventData} from 'react-native';
import {defineStyles} from './style';
interface Props {
  placeholder?: string;
  labelUp?: string;
  onChangeText: (value:string) => void;
  value: string;
  name?: string;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  error?: boolean | undefined;
  helperText?: string;
  editable?: boolean;
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
}: Props) => {
  const styles = defineStyles();
  return (
    <>
      {labelUp && <Text style={styles.labelUp}>{labelUp}</Text>}
      <TextInput
        id={name}
        placeholder={placeholder}
        style={error ? [styles.input, styles.inputError] : styles.input}
        onChangeText={onChangeText}
        value={value}
        onBlur={onBlur}
        editable={editable}
      />
      {error && <Text style={styles.labelDown}>{helperText}</Text>}
    </>
  );
};

export default Input;
