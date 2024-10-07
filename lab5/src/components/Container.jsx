import React, { useState } from 'react';
import SearchBar from './SearchBar';
import AddToDoComponent from './AddToDoComponent';
import ToDoList from './ToDoList';
import useGetAllToDo from '../Hooks/useGetAllToDo';
import Loading from './Loading';
import "../style.css";

function Container() {
  const [inputValue, setInputValue] = useState('');
  const [searchItem, setSearchItem] = useState('');
  
  const { isLoading, data: toDoList, setData } = useGetAllToDo(); 

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchItem(event.target.value);
  };

  const handleAddToDo = (completed) => {
    if (!inputValue.trim()) {
      alert('ToDo item cannot be empty');
      return;
    }
    const newToDo = {
      id: Math.random(),
      title: inputValue,
      completed: completed,
    };
    setData((prevData) => [...prevData, newToDo]); 
    setInputValue('');
  };

  const handleDelete = (id) => {
    setData((prevState) => prevState.filter((item) => item.id !== id)); 
  };

  const filteredToDoList = toDoList.filter((item) =>
    item.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <Loading isLoading={isLoading}>
      <>
        <SearchBar searchItem={searchItem} onSearchChange={handleSearchChange} />
        <AddToDoComponent inputValue={inputValue} onInputChange={handleInputChange} onSubmit={handleAddToDo} />
        <ToDoList toDoList={filteredToDoList} onDelete={handleDelete} />
      </>
      </Loading>
  );
}

export default Container;
