import { render, screen, fireEvent } from '@testing-library/react';
import TestingStateChange from '../components/TestingStateChange';
describe('TestingStateChange', () => {
  test('Testing page load', () => {
    render(<TestingStateChange />);
    expect(screen.getByText(/page loaded/i)).toBeInTheDocument();
  });
  test('Toggle text visible', () => {
    render(<TestingStateChange />);
    expect(screen.queryByText(/text visible/i)).toBeNull();
    fireEvent.click(screen.getByText(/toggle text/i));
    expect(screen.getByText(/text visible/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /toggle text/i }));
    expect(screen.queryByText(/text visible/i)).toBeNull();
  });

  test('Button disabled on click', () => {
    render(<TestingStateChange />);
    fireEvent.click(screen.getByText(/toggle button disabled/i));
    expect(screen.getByText(/^Disabled$/)).toBeDisabled();
  });

  test('Element added to the list', () => {
    render(<TestingStateChange />);
    expect(screen.getAllByTestId('record').length).toBe(2);

    fireEvent.click(screen.getByText(/add to list/i));
    expect(screen.getAllByTestId('record').length).toBe(3);
    expect(screen.getByText(/Helen/i)).toBeInTheDocument();
  });

  test('Element removed from list', () => {
    render(<TestingStateChange />);
    fireEvent.click(screen.getByText(/remove from list/i));
    expect(screen.getAllByTestId('record').length).toBe(1);
  });
});
