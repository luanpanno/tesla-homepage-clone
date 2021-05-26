import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 16.5vh;

  & > h1 {
    font-weight: 500;
    font-size: 3.5rem;
    line-height: 48px;
    color: #393c41;
  }

  & > h2 {
    font-weight: normal;
    font-size: 0.9rem;
    color: #5c5e62;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 130px;

  & > button {
    background-color: #1a1720;
    color: #fff;
    opacity: 0.8;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    padding: 13px 40px;
    border-radius: 20px;
    border: none;
    outline: 0;
    cursor: pointer;

    &.white {
      background-color: #fff;
      color: #1a1720;
      opacity: 0.65;
    }
  }

  @media screen and (min-width: 667px) {
    flex-direction: row;
    margin-bottom: 90px;
  }
`;
