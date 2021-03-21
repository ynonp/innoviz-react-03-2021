import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import LightBulb from './lightbulb';

test('renders off by default', () => {
  const screen = render(<LightBulb />);
  const el = screen.container.querySelector('.light');
  expect(el.style.background).toEqual('transparent');
});

test('toggle changes color', () => {
  const screen = render(<LightBulb />);
  const btn = screen.queryByRole('button', { name: 'Toggle' });
  userEvent.click(btn);
  const el = screen.container.querySelector('.light');
  expect(el.style.background).toEqual('yellow');
});

test('toggle changes different color', () => {
  const screen = render(<LightBulb color="purple" />);
  const btn = screen.queryByRole('button', { name: 'Toggle' });
  userEvent.click(btn);
  const el = screen.container.querySelector('.light');
  expect(el.style.background).toEqual('purple');
});


test('toggle changes color again', () => {
  const screen = render(<LightBulb />);
  const btn = screen.queryByRole('button', { name: 'Toggle' });
  userEvent.click(btn);
  userEvent.click(btn);
  const el = screen.container.querySelector('.light');
  expect(el.style.background).toEqual('transparent');
});

