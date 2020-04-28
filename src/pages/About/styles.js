import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

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
`