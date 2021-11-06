import React from "react";
import { useTodoContext } from "../../context/TodoContext";
import { Input } from "./styles";

export const TodoSearch = (props) => {
  const { searchValue, setSearchValue } = useTodoContext();
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Input
        {...props}
        placeholder="Buscar"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </>
  );
};
