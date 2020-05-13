import styled from "styled-components";

export const Wrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  border-top: 2px solid rgba(0, 0, 0, 0.12);
  font-size: 16px;
  color: #616161;
  padding: 12px 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &:last-child {
    border-bottom: 2px solid rgba(0, 0, 0, 0.12);
  }

  svg {
    width: 20px;
    cursor: pointer;
    transition: 0.3s;
  }

  svg:hover {
    opacity: 0.6;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  color: ${(props) => (props.isDone ? "#bdbdbd" : "inital")};
`;