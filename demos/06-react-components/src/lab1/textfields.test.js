import { render } from '@testing-library/react';
import TextFields from './textfields';
import userEvent from '@testing-library/user-event'

test('renders 5 input fields', () => {
  const screen = render(<TextFields />);
  const inputs = screen.getAllByRole('textbox');
  expect(inputs.length).toEqual(5);
});

test('change text in a field copies the value to all others', () => {
  const screen = render(<TextFields />);
  const inputs = screen.getAllByRole('textbox');
  userEvent.type(inputs[0], 'Hello World');
  for (let inp of inputs) {
    expect(inp.value).toEqual('Hello World');
  }
});

