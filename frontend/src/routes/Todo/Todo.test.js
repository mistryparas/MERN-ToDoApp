import React from "react";
import {cleanup, fireEvent, render} from '@testing-library/react';
import Todo from "./Todo";


// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);


it('Test Render', () => {
  const {getByText,getByLabelText} = render(<Todo/>);
  getByText('Tasks');
});

// it('Add items to list', () => {
//   const {getByText,getByLabelText} = render(<Todo/>);
//   const input = getByLabelText('Add New');
//   fireEvent.change(input, {target:{value: 'wash car'}});
//   fireEvent.click(getByText('Add New'));
//   //confirm data
//   getByText('wash car');
// });