import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    color: #5271FF;
    text-transform: capitalize;
    text-align: center;
    font-size: 4em;
    position: relative;
    top: 20px;
  }
`;

export const Box = styled.div`
  background-color: #f9f9f9;
  box-shadow: 2px 2px 12px #0002;
  padding: 25px;
  border-radius: 4px;
`;

export const About = styled.div`
    position: absolute;
    height: 25px;
    right: 5px;
    top: 5px;
    z-index: 1;

    .btn-info {
      font-size: 25px;
      color: #0003;
      cursor: pointer;
      transition: color 0.3s;
    }

    .btn-info:hover {
      color: #0007;
    }
`;

export const Timer = styled.div`
    width: 530px;
    height: 150px;
    margin-top: 30px;
`;

export const Clock = styled.div`
    display: inline-block;
    width: 75%;
    text-align: center;
    height: 75%;
    vertical-align: top;
    background-color: #879CFF;

    span {
      font-size: 5.5em;
      color: #fff9;
      display: inline-block;
      padding-top: 8px;
    }
`;

export const Control = styled.div`
    width: 25%;
    height: 75%;
    /*margin-bottom: 5px;*/
    display: inline-block;
    background-color: #7D94FF;
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #6c83ee;

      .btn-play {
        color: #fff9;
      }
    }

    .btn-play {
      font-size: 100px;
      color: #fff6;
      padding-top: 13px;
      margin: 0 auto;
      display: block;
      cursor: pointer;
      transition: color 0.3s;
    }
`;

export const Course = styled.div`
    height: 25%;
    width: 100%;
    text-align: center;
    margin-top: 2px;
    background-color: #97A7F2;

    span {
      display: inline-block;
      padding-top: 5px;
      font-size: 1.3em;
      font-style: italic;
      color: #FFFFFF;
    }
`;
