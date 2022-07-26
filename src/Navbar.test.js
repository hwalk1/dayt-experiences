import { render, screen } from '@testing-library/react';
import Navbar from './components/Navbar';

test('renders Navbar', () => {
  render(<Navbar />);
  const linkElement = screen.getByRole('img');
  expect(linkElement).toBeInTheDocument();
});
