import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  min-height: 52px;
`;

export const Logo = styled.div`
  height: 17px;
  cursor: pointer;

  svg {
    height: 17px;
  }
`;

export const Burger = styled.div`
  width: 27px;
  height: 24px;
  cursor: pointer;
  padding-right: 5px;

  svg {
    width: 27px;
  }
`;

export const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 30px;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  li {
    list-style: none;
    font-size: 0.9rem;
  }

  a {
    text-decoration: none;
    color: #393c41;

    &:hover {
      color: #000;
    }
  }

  @media screen and (min-width: 600px) {
    margin-bottom: 38px;

    ul {
      flex-direction: row;
    }
  }
`;
