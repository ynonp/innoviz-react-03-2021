import { render } from '@testing-library/react';
import App from './App';

test('renders bye bye text', () => {
  const screen = render(<App />);
  const el = screen.getByText(/Bye bye/i);
  expect(el).toBeInTheDocument();
});

test('the text is blue', () => {
  const screen = render(<App />);
  const el = screen.getByText(/Bye bye/i);
  expect(el.style.color).toEqual('blue');
});
