import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 5%;
`;

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const PostCard = styled(Link)`
  flex: 0 1 calc(25% - 1em);
  margin-top: 25px;
  width: 250px;
  height: 240px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: white;
  color: black;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: black;
    transform: translateY(-4px);
  }
`;
