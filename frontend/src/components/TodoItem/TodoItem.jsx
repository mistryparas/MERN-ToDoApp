import { useState } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "./TodoItem.css";

const TodoItem = ({ title, isDone, onDelete, onChange }) => {

  const [isEdit, setIsEdit] = useState(false);
  const [todoValue, setTodoValue ] = useState(title);

  const handleChange = (name, value) => {
    onChange(name, value);
  };

  const handleEnterKey = async (e) => {
    if (e.key === 'Enter') {
      console.log('do validate');
      handleChange('todo', todoValue);
      setIsEdit(false);
    }
  }

  return (
    <div className="card d-flex flex-row margin-bottom-20 padding-20">
      <input
        type="checkbox"
        className="margin-right-10"
        checked={isDone}
        onChange={() => handleChange("isDone", !isDone)}
      />
      {
        isEdit && 
        <input 
        onChange={(e)=> { setTodoValue(e.target.value)}} value={todoValue}
        onKeyUp={handleEnterKey}
        type="text" 
        placeholder="Enter Todo item" 
        className="form-control margin-bottom-20 padding-20"/>
      }
      {
        !isEdit &&
        <h5>{title}</h5>
      }
      
      <UncontrolledDropdown className="ml-auto">
        <DropdownToggle nav caret>
          <i className="fa fa-ellipsis-v"></i>
        </DropdownToggle>
        <DropdownMenu end>
          <DropdownItem onClick={() => {setIsEdit(!isEdit)}}>Edit</DropdownItem>
          <DropdownItem onClick={onDelete}>Delete</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default TodoItem;
