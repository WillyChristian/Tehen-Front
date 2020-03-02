import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 5%;
`;

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 500px;
`;

export const PostCard = styled(Link)`
  flex: 0 1 calc(25% - 1em);
  margin-top: 25px;
  width: 230px;
  height: 220px;
  border-radius: 5px;
  background-color: white;
  color: black;
  text-decoration: none;
  &:hover {
    transition-duration: 0.3s;
    color: black;
    transform: translateY(-4px);
  }
  &:active {
    transition-duration: 0.1s;
    border: 0.5px solid black;
  }
`;

export const Title = styled.div`
  margin: 10px 20px 0 20px;
  strong {
    font-size: 24px;
  }
`;

export const Footer = styled.div`
  margin: 25px 20px 0 20px;
  strong {
    font-size: 18px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

export const PrevButton = styled.button`
  margin-right: 10px;
  background-color: white; /* Green */
  border: none;
  border-radius: 3px;
  color: black;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  &:active {
    transition-duration: 0.4s;
    transform: translateY(4px);
  }
  &:disabled {
    opacity: 0.3;
  }
`;

export const NextButton = styled.button`
  margin-left: 10px;
  background-color: white; /* Green */
  border: none;
  border-radius: 3px;
  color: black;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  &:active {
    transition-duration: 0.1s;
    transform: translateY(2px);
  }
  &:disabled {
    opacity: 0.3;
  }
`;
