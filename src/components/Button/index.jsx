import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.theme.colors.main};
`;

StyledLink.defaultProps = {
  theme: {
    colors: {
      main: '#FFF'
    }
  }
};

export default {
  StyledLink,
};
