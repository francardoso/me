import styled from 'styled-components';

export default styled.div``;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
  margin: 20px 20px;
  svg {
    font-size: 2em;
  }
  &[open] {
    svg {
      color: #fff;
    }
  }
`;

export const MenuOptions = styled.div`
  position: absolute;
  z-index: 1;
  background: black;
  height: 100%;
  top: 0px;
  right: 0px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  > * {
    margin-top: 60px;
  }
`;
