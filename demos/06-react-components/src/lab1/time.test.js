import { render } from '@testing-library/react';
import TimeConverter from './time';
import userEvent from '@testing-library/user-event'

xtest('renders all fields', () => {
  const screen = render(<TimeConverter />);
  const hours = screen.getByLabelText('Hours');
  expect(hours).toBeInTheDocument();

  const minutes = screen.getByLabelText('Hours');
  expect(minutes).toBeInTheDocument();

  const seconds = screen.getByLabelText('Hours');
  expect(seconds).toBeInTheDocument();
});

test('Can change seconds', () => {
  const screen = render(<TimeConverter />);
  const seconds = screen.getByLabelText('Seconds');

  userEvent.type(seconds, "3600");
  const minutes = screen.getByLabelText('Minutes');
  const hours = screen.getByLabelText('Hours');
  expect(minutes).toHaveValue(60);
  expect(hours).toHaveValue(1);
});

xtest('Can change minutes', () => {
  const screen = render(<TimeConverter />);
  const seconds = screen.getByLabelText('Seconds');
  const minutes = screen.getByLabelText('Minutes');
  const hours = screen.getByLabelText('Hours');

  userEvent.type(minutes, "60");
  expect(seconds.value).toEqual(3600);
  expect(hours.value).toEqual(1);
});

