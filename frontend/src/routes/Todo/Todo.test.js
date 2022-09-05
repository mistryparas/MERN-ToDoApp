import { render, screen } from '@testing-library/react';
import Todo from './Todo';

it('Test render title by data-testid', async () => {
  const wrapper = render(<Todo />);
  expect(await wrapper.findAllByTestId('ProjectTitle'))
})

it('Test add todo button text by data-testid', async () => {
  const wrapper = render(<Todo />);
  expect(await wrapper.findAllByTestId('AddNewTodo'))
})