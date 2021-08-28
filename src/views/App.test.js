import { render, screen } from '@testing-library/react';
import App from './App';

test('displays correct heading with role and level', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 1 });
  expect(heading).toHaveTextContent('Property Listings');
});
