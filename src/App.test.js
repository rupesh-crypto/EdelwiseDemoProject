import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero section', () => {
  render(<App />);
  expect(screen.getByText(/Edelweiss Flexi Cap Fund/i)).toBeInTheDocument();
});

test('renders the Invest Now button', () => {
  render(<App />);
  expect(screen.getAllByText(/Invest Now/i).length).toBeGreaterThan(0);
});
