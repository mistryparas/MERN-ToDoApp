import { render, screen } from '@testing-library/react';
import Todo from './Todo';

it('Test title text by data-testid', async () => {
  const wrapper = render(<Todo />);
  expect(await wrapper.findAllByTestId('ProjectTitle'))
})

it('Test button text by data-testid', async () => {
  const wrapper = render(<Todo />);
  expect(await wrapper.findAllByTestId('AddNewTodo'))
})

// it('Create Todo', async () => {
//   const {getByText,getByLabelText} = render(<Todo/>);

//   // enter content, interact with page
//   const input = findAllByTestId('EnterTodoItem');
//   fireEvent.change(input, {target:{value:'wash car'}});
//   fireEvent.click(getByText('Add New'));

//   getByText('wash car');
// })