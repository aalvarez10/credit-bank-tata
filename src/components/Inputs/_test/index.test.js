
import { render, fireEvent } from '@testing-library/react-native';
import Input from '..';


describe('Input Component', () => {
  it('should render the placeholder text', () => {
    const placeholderText = 'Enter text';
    const { getByPlaceholderText } = render(<Input placeholder={placeholderText} />);
    expect(getByPlaceholderText(placeholderText)).toBeTruthy();
  });

  it('should render the label text when labelUp is provided', () => {
    const labelText = 'Label';
    const { getByText } = render(<Input labelUp={labelText} />);
    expect(getByText(labelText)).toBeTruthy();
  });

  it('should call onChangeText when text is changed', () => {
    const handleChangeText = jest.fn();
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" onChangeText={handleChangeText} />);
    const input = getByPlaceholderText('Enter text');
    
    fireEvent.changeText(input, 'new text');
    expect(handleChangeText).toHaveBeenCalledWith('new text');
  });

  it('should display error message when error is true', () => {
    const helperText = 'Error message';
    const { getByText } = render(<Input error={true} helperText={helperText} />);
    expect(getByText(helperText)).toBeTruthy();
  });

  it('should be editable when editable is false', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" editable={false} />);
    const input = getByPlaceholderText('Enter text');
    
    expect(input.props.editable).toBe(false);
  });
  
  
});