import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 2% 5% 2% 5%;
  p {
    color: white;
  }
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  color: white;
  img {
    width: 45px;
    height: 45px;
    &:hover {
      transition-duration: 0.3s;
      transform: translateX(-4px);
    }
  }
`;

export const Title = styled.div`
  margin-top: 25px;
  text-align: center;
  h1 {
    color: white;
  }
`;
