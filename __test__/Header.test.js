import { render, screen } from '@testing-library/react';
import Header from '../src/component/Header';


test('render react with demo test', () => {
  render(<Header/>)

  const headerElement = screen.getByText(/demo/i)
  expect(headerElement).toBeInTheDocument()
})




