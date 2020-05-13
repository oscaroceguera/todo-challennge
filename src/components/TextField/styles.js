import styled from "styled-components";

export const Wrapper = styled.div`
  height: 70px;
  position: relative;
  margin: 12px auto;
  width: 60%;

  > input {
    border: 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.12);
    font-size: 16px;
    outline: none;
    position: absolute;
    bottom: 0;
    padding: 12px 0 0 0;
    transition: 0.3s;
    width: 99%;
  }

  > input:hover {
    border-bottom: 2px solid rgba(0, 0, 0, 0.54);
  }

  > input:active,
  > input:focus {
    border-bottom: 2px solid #00b8d4;
  }

  > input + label {
    color: #bdbdbd;
    position: absolute;
    bottom: 0;
  }

  > input:active + label,
  > input:focus + label {
    color: #00b8d4;
    top: 18px;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const labelStyl = {
  top: "18px",
  color: "#00b8d4",
};
