import React, {useState} from 'react';
import styled from 'styled-components'

import TextField from '../components/TextField'
import List from '../components/List'

const Wrapper = styled.div`
  background: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  min-height: 200px;
  padding: 12px 0;
  margin: 12px auto;
  width: 40%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

function App() {
  const [data, setData] = useState([])

  const sendData = (item) => {
    setData([...data, item]);
  };

  const removeTask = idx => {
    const items = data.filter(item => item.id !== idx)
    setData(items);
  }

  const handleComplete = e => {
    const { value, checked } = e.target;

    let tasks = [...data]

    tasks.forEach((item) => {
      if (item.id === value) {
        item.done = checked;
      }
    });

    setData(tasks)
  }

  return (
    <Wrapper>
      <TextField sendData={sendData} />
      <List
        data={data}
        removeTask={removeTask}
        handleComplete={handleComplete}
      />
    </Wrapper>
  );
}

export default App;
