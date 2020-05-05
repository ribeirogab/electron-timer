import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 20px;
  height: 100vh;
  color: #333;
  background-color: #f1f1f1;

  img {
    width: 50px;
  }

  p {
    margin: 5px 0;
  }

  p span {
    color: #55f;
    cursor: pointer;
  }

  p span:hover {
    border-bottom: solid 1px #55f;
  }
`;
