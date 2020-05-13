import React from 'react'
import PropTypes from "prop-types";

import { ReactComponent as DelteIcon } from "./delete-icon.svg";
import { Wrapper, Item, Label } from "./styles";
import './styles.scss'

const List = ({ data, handleComplete, removeTask }) => (
  <Wrapper>
    {data.map((item) => (
      <Item key={item.id}>
        <>
          <input
            type="checkbox"
            className="styled-checkbox"
            id={`styled-checkbox-${item.id}`}
            onClick={handleComplete}
            value={item.id}
          />
          <label htmlFor={`styled-checkbox-${item.id}`} />
        </>
        <Label isDone={item.done}>{item.task}</Label>
        <DelteIcon onClick={() => removeTask(item.id)} />
      </Item>
    ))}
  </Wrapper>
);

List.propTypes = {
  data: PropTypes.array.isRequired,
  handleComplete: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};

export default List;