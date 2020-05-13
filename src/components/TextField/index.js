import React, { useState } from "react";
import PropTypes from 'prop-types'
import { Wrapper, labelStyl } from "./styles";

const TextField = ({ sendData }) => {
  const [text, setText] = useState("");

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      sendData({
        id: Math.random().toString(36).substr(2, 9),
        task: text,
        done: false,
      });
      setText("");
    }
  };

  return (
    <Wrapper>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={keyPress}
      />
      <label htmlFor="textfield" style={text ? labelStyl : null}>
        Add todo
      </label>
    </Wrapper>
  );
};

TextField.propTypes = {
  sendData: PropTypes.func.isRequired
};

export default TextField
