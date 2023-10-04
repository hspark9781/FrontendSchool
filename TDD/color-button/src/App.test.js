import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => { //test() unit들의 묶음
  render(<App />);
  const button  = screen.getByRole('button', {name : 'change to blue!'});
  expect(button).toHaveStyle({backgroundColor : 'red'});

  fireEvent.click(button);
  expect(button.textContent).toBe('change to red!');

});
